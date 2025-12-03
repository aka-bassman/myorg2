import { store } from "@akanjs/store";

import * as cnst from "../cnst";
import { fetch, sig } from "../useClient";

export class InventoryStore extends store(sig.inventory, {
  todaysInventory: null as cnst.Inventory | null,
}) {
  async loadTodaysInventory() {
    const todaysInventory = await fetch.getTodaysInventory();
    this.set({ todaysInventory });
  }
}
