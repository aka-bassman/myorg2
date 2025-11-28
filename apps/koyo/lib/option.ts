import { Middleware, useGlobals } from "@akanjs/server";
import { AlarmApi } from "@koyo/nest";

import type { LibOptions } from "./__lib/lib.service";

export type ModulesOptions = LibOptions & {
  //
};

export const registerGlobalModule = (options: ModulesOptions) => {
  return useGlobals({
    uses: {
      alarmApi: new AlarmApi("koyo"),
    },
    useAsyncs: {},
  });
};

export const registerGlobalMiddlewares = (options: ModulesOptions) => {
  return [] as Middleware[];
};
