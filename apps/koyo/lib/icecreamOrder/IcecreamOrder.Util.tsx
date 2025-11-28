"use client";
import { clsx } from "@akanjs/client";
import { st, usePage } from "@koyo/client";

interface ProcessProps {
  className?: string;
  icecreamOrderId: string;
  disabled?: boolean;
}
export const Process = ({ className, icecreamOrderId, disabled }: ProcessProps) => {
  const { l } = usePage();
  return (
    <button
      className={clsx("btn btn-secondary", className)}
      disabled={disabled}
      onClick={() => {
        void st.do.processIcecreamOrder(icecreamOrderId);
      }}
    >
      {l("icecreamOrder.signal.processIcecreamOrder")}
    </button>
  );
};

interface ServeProps {
  className?: string;
  icecreamOrderId: string;
  disabled?: boolean;
}
export const Serve = ({ className, icecreamOrderId, disabled }: ServeProps) => {
  const { l } = usePage();
  return (
    <button
      className={clsx("btn btn-accent", className)}
      disabled={disabled}
      onClick={() => {
        void st.do.serveIcecreamOrder(icecreamOrderId);
      }}
    >
      {l("icecreamOrder.signal.serveIcecreamOrder")}
    </button>
  );
};

interface FinishProps {
  className?: string;
  icecreamOrderId: string;
  disabled?: boolean;
}
export const Finish = ({ className, icecreamOrderId, disabled }: FinishProps) => {
  const { l } = usePage();
  return (
    <button
      className={clsx("btn btn-success", className)}
      disabled={disabled}
      onClick={() => {
        void st.do.finishIcecreamOrder(icecreamOrderId);
      }}
    >
      {l("icecreamOrder.signal.finishIcecreamOrder")}
    </button>
  );
};

interface CancelProps {
  className?: string;
  icecreamOrderId: string;
  disabled?: boolean;
}
export const Cancel = ({ className, icecreamOrderId, disabled }: CancelProps) => {
  const { l } = usePage();
  return (
    <button
      className={clsx("btn btn-warning", className)}
      disabled={disabled}
      onClick={() => {
        void st.do.cancelIcecreamOrder(icecreamOrderId);
      }}
    >
      {l("icecreamOrder.signal.cancelIcecreamOrder")}
    </button>
  );
};
