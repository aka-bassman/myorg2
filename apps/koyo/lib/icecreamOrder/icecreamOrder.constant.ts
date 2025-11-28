import { enumOf, Int } from "@akanjs/base";
import { isPhoneNumber } from "@akanjs/common";
import { via } from "@akanjs/constant";

export class ServeType extends enumOf("serveType", ["forHere", "takeOut", "delivery"] as const) {}

export class IcecreamOrderStatus extends enumOf("icecreamOrderStatus", [
  "active",
  "processing",
  "served",
  "finished",
  "canceled",
] as const) {}

export class Topping extends enumOf("topping", [
  "fruitRings",
  "oreo",
  "strawberry",
  "mango",
  "cheeseCube",
  "corn",
  "granola",
  "banana",
  "fig",
] as const) {}

export class IcecreamOrderInput extends via((field) => ({
  serveType: field(ServeType, { default: "forHere" }),
  size: field(Int),
  toppings: field([Topping]),
  phone: field(String, { validate: isPhoneNumber }),
})) {}

export class IcecreamOrderObject extends via(IcecreamOrderInput, (field) => ({
  status: field(IcecreamOrderStatus, { default: "active" }),
})) {}

export class LightIcecreamOrder extends via(
  IcecreamOrderObject,
  ["size", "toppings", "status"] as const,
  (resolve) => ({})
) {}

export class IcecreamOrder extends via(IcecreamOrderObject, LightIcecreamOrder, (resolve) => ({})) {}

export class IcecreamOrderInsight extends via(IcecreamOrder, (field) => ({})) {}
