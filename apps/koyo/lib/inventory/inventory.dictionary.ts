import { modelDictionary } from "@akanjs/dictionary";

import type { Inventory, InventoryInsight } from "./inventory.constant";
import type { InventoryEndpoint, InventorySlice } from "./inventory.signal";

export const dictionary = modelDictionary(["en", "ko"])
  .of((t) => t(["Inventory", "Inventory"]).desc(["Inventory description", "Inventory 설명"]))
  .model<Inventory>((t) => ({
    stocks: t(["Stocks", "재고"]).desc([
      "A list of stock items associated with inventory record. Each entry represents a type of item and its current stock level.",
      "인벤토리 레코드와 관련된 재고 항목들의 목록입니다. 각 항목은 아이템 종류와 현재 재고량을 의미합니다.",
    ]),
    at: t(["At", "일시"]).desc([
      "The timestamp indicating when inventory record was created or is valid for.",
      "인벤토리 레코드가 생성된 시점 또는 해당되는 일자를 나타내는 타임스탬프입니다.",
    ]),
  }))
  .insight<InventoryInsight>((t) => ({}))
  .slice<InventorySlice>((fn) => ({
    inPublic: fn(["Inventory In Public", "Inventory 공개"]).arg((t) => ({})),
  }))
  .endpoint<InventoryEndpoint>((fn) => ({
    getTodaysInventory: fn(["Get Todays Inventory", "오늘 재고 조회"]).desc([
      "Get today's inventory. If not exists, create it.",
      "오늘의 인벤토리를 조회합니다. 없으면 생성합니다.",
    ]),
    refillTodaysInventory: fn(["Refill Todays Inventory", "오늘 재고 채우기"]).desc([
      "Refill today's inventory.",
      "오늘의 인벤토리를 채웁니다.",
    ]),
  }))
  .error({
    stockNotFound: ["Stock not found: {type}", "재고를 찾을 수 없습니다: {type}"],
    stockNotEnough: ["Stock not enough: {type}, {quantity}", "재고가 부족합니다: {type}, {quantity}"],
  })
  .translate({
    outOfStock: ["Out of stock", "재고가 부족합니다"],
  });
