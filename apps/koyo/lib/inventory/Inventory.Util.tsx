"use client";
import { clsx } from "@akanjs/client";
import { st, usePage } from "@koyo/client";
import { BiRefresh } from "react-icons/bi";

interface RefillProps {
  className?: string;
}
export const Refill = ({ className }: RefillProps) => {
  const { l } = usePage();
  return (
    <button
      className={clsx("btn btn-primary", className)}
      onClick={() => {
        void st.do.refillTodaysInventory();
      }}
    >
      <BiRefresh /> {l("inventory.signal.refillTodaysInventory")}
    </button>
  );
};
