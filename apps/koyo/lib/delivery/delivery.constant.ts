import { Int } from "@akanjs/base";
import { via } from "@akanjs/constant";

import { LightIcecreamOrder } from "../icecreamOrder/icecreamOrder.constant";

export class DeliveryInput extends via((field) => ({
  icecreamOrders: field([LightIcecreamOrder], { minlength: 1 }),
})) {}

export class DeliveryObject extends via(DeliveryInput, (field) => ({})) {}

export class LightDelivery extends via(DeliveryObject, ["icecreamOrders"] as const, (resolve) => ({})) {}

export class Delivery extends via(DeliveryObject, LightDelivery, (resolve) => ({})) {}

export class DeliveryInsight extends via(Delivery, (field) => ({})) {}
