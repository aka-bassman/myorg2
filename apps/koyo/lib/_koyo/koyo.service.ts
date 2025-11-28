
import { serve } from "@akanjs/service";

export class KoyoService extends serve("koyo" as const, { serverMode: "batch" }, () => ({})) {}
