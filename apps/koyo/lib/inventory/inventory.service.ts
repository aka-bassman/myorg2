import { serve } from "@akanjs/service";

import * as cnst from "../cnst";
import * as db from "../db";

export class InventoryService extends serve(db.inventory, () => ({})) {}
