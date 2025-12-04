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
  currentQty: field(Int, { default: 0, min: 0 }),
})) {
  getPercentage() {
    return (this.currentQty / this.totalQty) * 100;
  }
  getStatus() {
    const percentage = this.getPercentage();
    if (percentage === 0) return "empty";
    if (percentage < 30) return "low";
    return "normal";
  }
}
