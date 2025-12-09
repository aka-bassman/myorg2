
import { clsx } from "@akanjs/client";
import { cnst, usePage } from "@koyo/client";

interface GeneralProps {
  className?: string;
  delivery: cnst.Delivery;
}
export const General = ({ className, delivery }: GeneralProps) => {
  const { l } = usePage();
  return (
    <div className={clsx("w-full", className)}>
      <div>{l("delivery.id")}: {delivery.id}</div>
    </div>
  );
};
