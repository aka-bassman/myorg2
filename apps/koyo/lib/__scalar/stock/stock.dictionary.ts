import { scalarDictionary } from "@akanjs/dictionary";

import type { Stock } from "./stock.constant";

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
  }));
