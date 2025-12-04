import { Public } from "@akanjs/nest";
import { endpoint, internal, slice } from "@akanjs/signal";

import * as cnst from "../cnst";
import * as srv from "../srv";

export class InventoryInternal extends internal(srv.inventory, () => ({})) {}

export class InventorySlice extends slice(
  srv.inventory,
  { guards: { root: Public, get: Public, cru: Public } },
  (init) => ({
    inPublic: init().exec(function () {
      return this.inventoryService.queryAny();
    }),
  })
) {}

export class InventoryEndpoint extends endpoint(srv.inventory, ({ query }) => ({
  getTodaysInventory: query(cnst.Inventory).exec(async function () {
    return await this.inventoryService.getTodaysInventory();
  }),
  refillTodaysInventory: query(cnst.Inventory).exec(async function () {
    return await this.inventoryService.refillTodaysInventory();
  }),
})) {}
