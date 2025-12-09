
import { Public } from "@akanjs/nest";
import { endpoint, internal, slice } from "@akanjs/signal";

import * as cnst from "../cnst";
import * as srv from "../srv";

export class DeliveryInternal extends internal(srv.delivery, () => ({})) {}

export class DeliverySlice extends slice(srv.delivery, { guards: { root: Public, get: Public, cru: Public } }, (init) => ({
  inPublic: init()
    .exec(function () {
      return this.deliveryService.queryAny();
    }),
})) {}

export class DeliveryEndpoint extends endpoint(srv.delivery, () => ({})) {}
