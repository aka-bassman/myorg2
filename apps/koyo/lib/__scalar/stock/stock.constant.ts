import { enumOf, Int } from "@akanjs/base";
import { via } from "@akanjs/constant";

export class StockType extends enumOf("stockType", [
  "yogurtIcecream",
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

export class Stock extends via((field) => ({
  type: field(StockType),
  totalQty: field(Int, { default: 0, min: 0 }),
  usedQty: field(Int, { default: 0, min: 0 }),
})) {}
