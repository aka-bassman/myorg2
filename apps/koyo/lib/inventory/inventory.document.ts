import { dayjs } from "@akanjs/base";
import { beyond, by, from, into, type SchemaOf } from "@akanjs/document";

import * as cnst from "../cnst";

export class InventoryFilter extends from(cnst.Inventory, (filter) => ({
  query: {},
  sort: {
    latestAt: { at: -1 },
  },
})) {}

export class Inventory extends by(cnst.Inventory) {}

export class InventoryModel extends into(Inventory, InventoryFilter, cnst.inventory, () => ({})) {
  async getTodayInventory() {
    const today = dayjs().set("hour", 0).set("minute", 0).set("second", 0).set("millisecond", 0);
    const latestInventory = await this.findAny({ sort: "latestAt" });
    if (!latestInventory || latestInventory.at.isSame(today))
      return await new this.Inventory({ stocks: latestInventory?.stocks ?? [], at: today }).save();
    else return latestInventory;
  }
}

export class InventoryMiddleware extends beyond(InventoryModel, Inventory) {
  onSchema(schema: SchemaOf<InventoryModel, Inventory>) {
    // schema.index({ status: 1 })
  }
}
