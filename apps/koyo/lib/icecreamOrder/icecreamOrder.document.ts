import { beyond, by, from, into, type SchemaOf } from "@akanjs/document";

import * as cnst from "../cnst";
import { Revert } from "../dict";

export class IcecreamOrderFilter extends from(cnst.IcecreamOrder, (filter) => ({
  query: {
    byStatuses: filter()
      .opt("statuses", [cnst.IcecreamOrderStatus])
      .opt("serveType", cnst.ServeType)
      .query((statuses, serveType) => ({
        ...(statuses?.length ? { status: { $in: statuses } } : {}),
        ...(serveType ? { serveType } : {}),
      })),
  },
  sort: {},
})) {}

export class IcecreamOrder extends by(cnst.IcecreamOrder) {
  process() {
    if (this.status !== "active") throw new Revert("icecreamOrder.error.onlyActiveCanBeProcessed");
    this.status = "processing";
    return this;
  }
  serve() {
    if (this.status !== "processing") throw new Revert("icecreamOrder.error.onlyProcessingCanBeServed");
    this.status = "served";
    return this;
  }
  finish() {
    if (this.status !== "served") throw new Revert("icecreamOrder.error.onlyServedCanBeFinished");
    this.status = "finished";
    return this;
  }
  cancel() {
    if (this.status !== "active") throw new Revert("icecreamOrder.error.onlyActiveCanBeCanceled");
    this.status = "canceled";
    return this;
  }
}

export class IcecreamOrderModel extends into(IcecreamOrder, IcecreamOrderFilter, cnst.icecreamOrder, () => ({})) {}

export class IcecreamOrderMiddleware extends beyond(IcecreamOrderModel, IcecreamOrder) {
  onSchema(schema: SchemaOf<IcecreamOrderModel, IcecreamOrder>) {
    // schema.index({ status: 1 })
  }
}
