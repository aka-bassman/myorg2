import { serve } from "@akanjs/service";
import type { AlarmApi } from "@koyo/nest";

import * as db from "../db";
import { dayjs } from "@akanjs/base";

export class IcecreamOrderService extends serve(db.icecreamOrder, ({ use }) => ({
  alarmApi: use<AlarmApi>(),
})) {
  async processIcecreamOrder(icecreamOrderId: string) {
    const icecreamOrder = await this.getIcecreamOrder(icecreamOrderId);
    return await icecreamOrder.process().save();
  }
  async serveIcecreamOrder(icecreamOrderId: string) {
    const icecreamOrder = await this.getIcecreamOrder(icecreamOrderId);
    return await icecreamOrder.serve().save();
  }
  async finishIcecreamOrder(icecreamOrderId: string) {
    const icecreamOrder = await this.getIcecreamOrder(icecreamOrderId);
    return await icecreamOrder.finish().save();
  }
  async cancelIcecreamOrder(icecreamOrderId: string) {
    const icecreamOrder = await this.getIcecreamOrder(icecreamOrderId);
    return await icecreamOrder.cancel().save();
  }
  async warnIcecreamMeltingAll() {
    const servedIcecreamOrders = await this.icecreamOrderModel.listByStatuses(["served"]);
    for (const icecreamOrder of servedIcecreamOrders) {
      if (icecreamOrder.createdAt.isAfter(dayjs().subtract(15, "seconds"))) continue;
      this.alarmApi.warn(`IcecreamOrder ${icecreamOrder.id} is melting 😱`);
    }
  }
}
