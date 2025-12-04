import { dayjs } from "@akanjs/base";
import { via } from "@akanjs/constant";

import { Stock, StockType } from "../__scalar/stock/stock.constant";

export class InventoryInput extends via((field) => ({
  stocks: field([Stock]),
})) {}

export class InventoryObject extends via(InventoryInput, (field) => ({
  at: field(Date, { default: () => dayjs().set("hour", 0).set("minute", 0).set("second", 0).set("millisecond", 0) }),
})) {}

export class LightInventory extends via(InventoryObject, [] as const, (resolve) => ({})) {}

export class Inventory extends via(InventoryObject, LightInventory, (resolve) => ({})) {
  isInStock(type: StockType["value"], quantity = 1) {
    const stock = this.stocks.find((stock) => stock.type === type);
    if (!stock) return false;
    return stock.currentQty >= quantity;
  }
}

export class InventoryInsight extends via(Inventory, (field) => ({})) {}
