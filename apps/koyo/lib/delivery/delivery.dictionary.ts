import { modelDictionary } from "@akanjs/dictionary";

import type { Delivery, DeliveryInsight } from "./delivery.constant";
import type { DeliveryEndpoint, DeliverySlice } from "./delivery.signal";

export const dictionary = modelDictionary(["en", "ko"])
  .of((t) => t(["Delivery", "Delivery"]).desc(["Delivery description", "Delivery 설명"]))
  .model<Delivery>((t) => ({
    icecreamOrders: t(["Icecream Orders", "아이스크림 주문"]).desc([
      "Icecream orders of the delivery",
      "배달의 아이스크림 주문",
    ]),
  }))
  .insight<DeliveryInsight>((t) => ({}))
  .slice<DeliverySlice>((fn) => ({
    inPublic: fn(["Delivery In Public", "Delivery 공개"]).arg((t) => ({})),
  }))
  .endpoint<DeliveryEndpoint>((fn) => ({}))
  .error({
    cannotUpdateDelivery: ["Cannot update created delivery", "생성된 배달을 수정할 수 없습니다"],
  })
  .translate({});
