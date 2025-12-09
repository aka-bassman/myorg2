import { ModelProps } from "@akanjs/client";
import { Link } from "@akanjs/ui";
import { cnst, IcecreamOrder, usePage } from "@koyo/client";

export const Card = ({ delivery, href }: ModelProps<"delivery", cnst.LightDelivery>) => {
  const { l } = usePage();
  return (
    <Link href={href} className="bg-base-300 w-full rounded border p-4">
      <div className="mb-3 text-lg font-bold">
        {l("delivery.modelName")} #{delivery.id.slice(-4)}
      </div>
      <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {delivery.icecreamOrders.map((icecreamOrder) => (
          <IcecreamOrder.Unit.Card key={icecreamOrder.id} icecreamOrder={icecreamOrder} showControls={false} />
        ))}
      </div>
    </Link>
  );
};
