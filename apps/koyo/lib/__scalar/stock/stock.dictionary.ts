import { scalarDictionary } from "@akanjs/dictionary";

import { type Topping } from "../../icecreamOrder/icecreamOrder.constant";
import { dictionary as icecreamOrder } from "../../icecreamOrder/icecreamOrder.dictionary";
import { type Stock, StockType } from "./stock.constant";

export const dictionary = scalarDictionary(["en", "ko"])
  .of((t) =>
    t(["Stock", "재고"]).desc([
      "Stock is a collection of items that are available for purchase",
      "재고는 구매 가능한 아이템들의 모음입니다",
    ])
  )
  .model<Stock>((t) => ({
    type: t(["Type", "타입"]).desc(["Type of the stock", "재고의 타입"]),
    totalQty: t(["Total Quantity", "총 수량"]).desc(["Total quantity of the stock", "재고의 총 수량"]),
    currentQty: t(["Current Quantity", "현재 수량"]).desc(["Current quantity of the stock", "재고의 현재 수량"]),
  }))
  .enum<StockType>("stockType", (t) => ({
    yogurtIcecream: t(["Yogurt Icecream", "요거트 아이스크림"]).desc([
      "Yogurt Icecream stock",
      "요거트 아이스크림 재고",
    ]),
    ...icecreamOrder.getEnum<Topping>("topping"),
  }));
