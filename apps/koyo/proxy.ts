
import { createNextMiddleware } from "@akanjs/next";

export const config = {
  unstable_allowDynamic: ["/node_modules/reflect-metadata/**"],
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
export const proxy = createNextMiddleware();
  