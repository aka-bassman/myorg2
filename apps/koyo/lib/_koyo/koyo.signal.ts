
import { endpoint, internal } from "@akanjs/signal";

import * as srv from "../srv";

export class KoyoInternal extends internal(srv.koyo, () => ({})) {}

export class KoyoEndpoint extends endpoint(srv.koyo, () => ({})) {}
  