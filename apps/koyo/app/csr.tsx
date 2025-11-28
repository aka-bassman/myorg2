
import { bootCsr } from "@akanjs/next";

import { registerClient } from "../client";

void bootCsr(import.meta.glob("./**/*.tsx"), registerClient);
  