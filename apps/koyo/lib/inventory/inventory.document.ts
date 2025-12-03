import { dayjs } from "@akanjs/base";
import { beyond, by, from, into, type SchemaOf } from "@akanjs/document";

import * as cnst from "../cnst";
import { Revert } from "../dict";

export class InventoryFilter extends from(cnst.Inventory, (filter) => ({
  query: {},
  sort: {
    latestAt: { at: -1 },
  },
})) {}

export class Inventory extends by(cnst.Inventory) {
  useStocks(usages: { type: cnst.StockType["value"]; quantity: number }[]) {
    for (const usage of usages) this.useStock(usage.type, usage.quantity);
    return this;
  }
  useStock(type: cnst.StockType["value"], quantity: number) {
    const stock = this.stocks.find((stock) => stock.type === type);
    if (!stock) throw new Revert("inventory.error.stockNotFound", { type });
    if (stock.usedQty + quantity > stock.totalQty)
      throw new Revert("inventory.error.stockNotEnough", { type, quantity });
    stock.usedQty += quantity;
    return this;
  }
}

export class InventoryModel extends into(Inventory, InventoryFilter, cnst.inventory, () => ({})) {
  async generateTodaysInventory() {
    const today = dayjs().set("hour", 0).set("minute", 0).set("second", 0).set("millisecond", 0);
    const latestInventory = await this.findAny({ sort: "latestAt" });
    if (latestInventory?.at.isSame(today)) return latestInventory;
    return await new this.Inventory({
      stocks: [
        { type: "yogurtIcecream", totalQty: 1000, usedQty: 0 },
        ...cnst.Topping.map((topping) => ({ type: topping, totalQty: 10, usedQty: 0 })),
      ],
      at: today,
    }).save();
  }
}

export class InventoryMiddleware extends beyond(InventoryModel, Inventory) {
  onSchema(schema: SchemaOf<InventoryModel, Inventory>) {
    // schema.index({ status: 1 })
  }
}
