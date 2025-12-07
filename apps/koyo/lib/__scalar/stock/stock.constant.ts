import { enumOf, Int } from "@akanjs/base";
import { via } from "@akanjs/constant";

import { Topping } from "../../icecreamOrder/icecreamOrder.constant";

export class StockType extends enumOf("stockType", ["yogurtIcecream", ...Topping.values] as const) {}

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
