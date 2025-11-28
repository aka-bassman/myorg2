import { Logger } from "@akanjs/common";

export class AlarmApi {
  readonly #logger = new Logger("AlarmApi");
  constructor(readonly name: string) {}

  warn(message: string) {
    this.#logger.warn(`${this.name}: ${message}`);
  }
}
