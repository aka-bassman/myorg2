import { Load } from "@akanjs/ui";
import { fetch, IcecreamOrder, usePage } from "@koyo/client";

export default function Page() {
  const { l } = usePage();
  return (
    <Load.Page
      of={Page}
      loader={async () => {
        const [{ icecreamOrderInitInWaiting }, { icecreamOrderInitInPickup }] = await Promise.all([
          fetch.initIcecreamOrderInWaiting(),
          fetch.initIcecreamOrderInPickup(),
        ]);
        return { icecreamOrderInitInWaiting, icecreamOrderInitInPickup };
      }}
      render={({ icecreamOrderInitInWaiting, icecreamOrderInitInPickup }) => {
        return (
          <div className="flex size-full gap-2 p-4">
            <div className="w-2/3">
              <h2 className="my-2 text-3xl font-bold">{l("icecreamOrder.pickup")}</h2>
              <IcecreamOrder.Zone.Card
                className="space-y-2"
                init={icecreamOrderInitInPickup}
                sliceName="icecreamOrderInWaiting"
                showControls={false}
              />
            </div>
            <div className="w-1/3">
              <h2 className="my-2 text-3xl font-bold">{l("icecreamOrder.waiting")}</h2>
              <IcecreamOrder.Zone.Card
                className="space-y-2"
                init={icecreamOrderInitInWaiting}
                sliceName="icecreamOrderInPickup"
                showControls={false}
              />
            </div>
          </div>
        );
      }}
    />
  );
}
