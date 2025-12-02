
import { clsx } from "@akanjs/client";
import { cnst, usePage } from "@koyo/client";

interface InventoryViewProps {
  className?: string;
  inventory: cnst.Inventory;
}

export const General = ({ className, inventory }: InventoryViewProps) => {
  const { l } = usePage();
  return (
    <div className={clsx("w-full", className)}>
      <div>{l("inventory.id")}: {inventory.id}</div>
    </div>
  );
};
