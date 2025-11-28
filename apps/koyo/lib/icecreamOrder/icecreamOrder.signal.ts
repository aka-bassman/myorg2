import { ID } from "@akanjs/base";
import { Public } from "@akanjs/nest";
import { endpoint, internal, slice } from "@akanjs/signal";

import * as cnst from "../cnst";
import * as srv from "../srv";

export class IcecreamOrderInternal extends internal(srv.icecreamOrder, ({ interval }) => ({
  warnIcecreamMeltingAll: interval(10000).exec(async function () {
    await this.icecreamOrderService.warnIcecreamMeltingAll();
  }),
})) {}

export class IcecreamOrderSlice extends slice(
  srv.icecreamOrder,
  { guards: { root: Public, get: Public, cru: Public } },
  (init) => ({
    inPublic: init().exec(function () {
      return this.icecreamOrderService.queryAny();
    }),
    inWaiting: init().exec(function () {
      return this.icecreamOrderService.queryByStatuses(["active", "processing"]);
    }),
    inPickup: init().exec(function () {
      return this.icecreamOrderService.queryByStatuses(["served"]);
    }),
  })
) {}

export class IcecreamOrderEndpoint extends endpoint(srv.icecreamOrder, ({ mutation }) => ({
  processIcecreamOrder: mutation(cnst.IcecreamOrder)
    .param("icecreamOrderId", ID)
    .exec(function (icecreamOrderId) {
      return this.icecreamOrderService.processIcecreamOrder(icecreamOrderId);
    }),
  serveIcecreamOrder: mutation(cnst.IcecreamOrder)
    .param("icecreamOrderId", ID)
    .exec(function (icecreamOrderId) {
      return this.icecreamOrderService.serveIcecreamOrder(icecreamOrderId);
    }),
  finishIcecreamOrder: mutation(cnst.IcecreamOrder)
    .param("icecreamOrderId", ID)
    .exec(function (icecreamOrderId) {
      return this.icecreamOrderService.finishIcecreamOrder(icecreamOrderId);
    }),
  cancelIcecreamOrder: mutation(cnst.IcecreamOrder)
    .param("icecreamOrderId", ID)
    .exec(function (icecreamOrderId) {
      return this.icecreamOrderService.cancelIcecreamOrder(icecreamOrderId);
    }),
})) {}
