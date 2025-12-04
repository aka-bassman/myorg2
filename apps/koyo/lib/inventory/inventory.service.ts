import { serve } from "@akanjs/service";

import * as cnst from "../cnst";
import * as db from "../db";

export class InventoryService extends serve(db.inventory, () => ({})) {
  async getTodaysInventory() {
    return await this.inventoryModel.generateTodaysInventory();
  }
  async refillTodaysInventory() {
    const inventory = await this.getTodaysInventory();
    return await inventory.refill().save();
  }
  async useStocks(usages: { type: cnst.StockType["value"]; quantity: number }[]) {
    const inventory = await this.getTodaysInventory();
    return await inventory.useStocks(usages).save();
  }
}
