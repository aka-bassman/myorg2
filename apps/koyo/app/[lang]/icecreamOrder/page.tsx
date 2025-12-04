import { Load, Model } from "@akanjs/ui";
import { cnst, fetch, IcecreamOrder, Inventory, usePage } from "@koyo/client";

export default function Page() {
  const { l } = usePage();
  return (
    <Load.Page
      of={Page}
      loader={async () => {
        const { icecreamOrderInitInPublic } = await fetch.initIcecreamOrderInPublic();
        const icecreamOrderForm: Partial<cnst.IcecreamOrderInput> = {};
        return { icecreamOrderInitInPublic, icecreamOrderForm };
      }}
      render={({ icecreamOrderInitInPublic, icecreamOrderForm }) => {
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-5xl font-black">
              <div className="text-5xl font-black">{l("inventory.modelName")}</div>
              <Inventory.Util.Refill className="absolute top-2 right-2" />
            </div>
            <Inventory.Zone.Today />
            <div className="flex items-center gap-4 text-5xl font-black">
              {l("icecreamOrder.modelName")}
              <Model.New
                className="btn btn-primary"
                sliceName="icecreamOrderInPublic"
                renderTitle="name"
                partial={icecreamOrderForm}
              >
                <IcecreamOrder.Template.General />
              </Model.New>
            </div>
            <IcecreamOrder.Zone.Card className="space-y-2" init={icecreamOrderInitInPublic} />
          </div>
        );
      }}
    />
  );
}
