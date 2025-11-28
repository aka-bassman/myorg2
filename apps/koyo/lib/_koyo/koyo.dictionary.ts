
import { serviceDictionary } from "@akanjs/dictionary";

import type { KoyoEndpoint } from "./koyo.signal";

export const dictionary = serviceDictionary(["en", "ko"])
  .endpoint<KoyoEndpoint>((fn) => ({}))
  .translate({});
