import { beyond, by, from, into, type SchemaOf } from "@akanjs/document";

import * as cnst from "../cnst";

export class DeliveryFilter extends from(cnst.Delivery, (filter) => ({
  query: {},
  sort: {},
})) {}

export class Delivery extends by(cnst.Delivery) {}

export class DeliveryModel extends into(Delivery, DeliveryFilter, cnst.delivery, () => ({})) {}

export class DeliveryMiddleware extends beyond(DeliveryModel, Delivery) {
  onSchema(schema: SchemaOf<DeliveryModel, Delivery>) {
    // schema.index({ status: 1 })
  }
}
