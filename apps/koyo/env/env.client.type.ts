
import type { BaseClientEnv } from "@akanjs/base";

export type AppClientEnv = BaseClientEnv & {
  cloudflare?: {
    siteKey: string;
  };
};
  