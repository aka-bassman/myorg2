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
  size: field(Int, { min: 50 }),
  toppings: field([Topping]),
  phone: field(String, { validate: isPhoneNumber }),
})) {}

export class IcecreamOrderObject extends via(IcecreamOrderInput, (field) => ({
  status: field(IcecreamOrderStatus, { default: "active" }),
})) {}

export class LightIcecreamOrder extends via(
  IcecreamOrderObject,
  ["serveType", "size", "toppings", "status"] as const,
  (resolve) => ({})
) {}

export class IcecreamOrder extends via(IcecreamOrderObject, LightIcecreamOrder, (resolve) => ({})) {}

export class IcecreamOrderInsight extends via(IcecreamOrder, (field) => ({
  yogurtIcecreamQty: field(Int, {
    default: 0,
    accumulate: { $sum: "$size" },
  }),
  fruitRingQty: field(Int, {
    default: 0,
    accumulate: { $sum: { $cond: [{ $in: ["fruitRings", "$toppings"] }, 1, 0] } },
  }),
  oreoQty: field(Int, { default: 0, accumulate: { $sum: { $cond: [{ $in: ["oreo", "$toppings"] }, 1, 0] } } }),
  strawberryQty: field(Int, {
    default: 0,
    accumulate: { $sum: { $cond: [{ $in: ["strawberry", "$toppings"] }, 1, 0] } },
  }),
  mangoQty: field(Int, { default: 0, accumulate: { $sum: { $cond: [{ $in: ["mango", "$toppings"] }, 1, 0] } } }),
  cheeseCubeQty: field(Int, {
    default: 0,
    accumulate: { $sum: { $cond: [{ $in: ["cheeseCube", "$toppings"] }, 1, 0] } },
  }),
  cornQty: field(Int, { default: 0, accumulate: { $sum: { $cond: [{ $in: ["corn", "$toppings"] }, 1, 0] } } }),
  granolaQty: field(Int, { default: 0, accumulate: { $sum: { $cond: [{ $in: ["granola", "$toppings"] }, 1, 0] } } }),
  bananaQty: field(Int, { default: 0, accumulate: { $sum: { $cond: [{ $in: ["banana", "$toppings"] }, 1, 0] } } }),
  figQty: field(Int, { default: 0, accumulate: { $sum: { $cond: [{ $in: ["fig", "$toppings"] }, 1, 0] } } }),
})) {}
