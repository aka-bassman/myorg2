import { store } from "@akanjs/store";

import { fetch, sig } from "../useClient";

export class IcecreamOrderStore extends store(sig.icecreamOrder, {
  // state
}) {
  async processIcecreamOrder(icecreamOrderId: string) {
    const icecreamOrder = await fetch.processIcecreamOrder(icecreamOrderId);
    this.setIcecreamOrder(icecreamOrder);
  }
  async serveIcecreamOrder(icecreamOrderId: string) {
    const icecreamOrder = await fetch.serveIcecreamOrder(icecreamOrderId);
    this.setIcecreamOrder(icecreamOrder);
  }
  async finishIcecreamOrder(icecreamOrderId: string) {
    const icecreamOrder = await fetch.finishIcecreamOrder(icecreamOrderId);
    this.setIcecreamOrder(icecreamOrder);
  }
  async cancelIcecreamOrder(icecreamOrderId: string) {
    const icecreamOrder = await fetch.cancelIcecreamOrder(icecreamOrderId);
    this.setIcecreamOrder(icecreamOrder);
  }
}
