import { serve } from "@akanjs/service";

import * as db from "../db";
import { Revert } from "../dict";
import type * as srv from "../srv";

export class DeliveryService extends serve(db.delivery, ({ service }) => ({
  icecreamOrderService: service<srv.IcecreamOrderService>(),
})) {
  _preUpdate(id: string, data: db.DeliveryInput) {
    throw new Revert("delivery.error.cannotUpdateDelivery");
    return data;
  }
  async _postCreate(delivery: db.Delivery) {
    for (const icecreamOrderId of delivery.icecreamOrders)
      await this.icecreamOrderService.finishIcecreamOrder(icecreamOrderId);
    return delivery;
  }
}
