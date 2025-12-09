import { Load, Model, Tab } from "@akanjs/ui";
import { cnst, Delivery, fetch, IcecreamOrder, Inventory, usePage } from "@koyo/client";

export default function Page() {
  const { l } = usePage();
  return (
    <Load.Page
      of={Page}
      loader={async () => {
        const [{ icecreamOrderInitInPublic }, { deliveryInitInPublic }] = await Promise.all([
          fetch.initIcecreamOrderInPublic(),
          fetch.initDeliveryInPublic(),
        ]);
        const icecreamOrderForm: Partial<cnst.IcecreamOrderInput> = {};
        return { icecreamOrderInitInPublic, deliveryInitInPublic, icecreamOrderForm };
      }}
      render={({ icecreamOrderInitInPublic, deliveryInitInPublic, icecreamOrderForm }) => {
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-5xl font-black">
              <div className="text-5xl font-black">{l("inventory.modelName")}</div>
              <Inventory.Util.Refill className="absolute top-2 right-2" />
            </div>
            <Inventory.Zone.Today />
            <Tab defaultMenu="icecreamOrder">
              <Tab.Menus className="flex items-center">
                <Tab.Menu menu="icecreamOrder" className="btn btn-xl" activeClassName="btn-primary">
                  {l("icecreamOrder.modelName")}
                </Tab.Menu>
                <Tab.Menu menu="delivery" className="btn btn-xl" activeClassName="btn-primary">
                  {l("delivery.modelName")}
                </Tab.Menu>
              </Tab.Menus>
              <Tab.Panel menu="icecreamOrder" className="p-2">
                <div className="flex items-center gap-4 font-black">
                  <div className="text-5xl font-bold">{l("icecreamOrder.modelName")}</div>
                  <IcecreamOrder.Util.PublicQueryMaker />
                  <Model.New
                    className="btn btn-primary"
                    sliceName="icecreamOrderInPublic"
                    renderTitle="name"
                    partial={icecreamOrderForm}
                  >
                    <IcecreamOrder.Template.General />
                  </Model.New>
                </div>
                <IcecreamOrder.Zone.Insight sliceName="icecreamOrderInPublic" />
                <IcecreamOrder.Zone.Card className="space-y-2" init={icecreamOrderInitInPublic} />
              </Tab.Panel>
              <Tab.Panel menu="delivery" className="p-2">
                <div className="flex items-center gap-4 font-black">
                  <div className="text-5xl font-bold">{l("delivery.modelName")}</div>
                  <Delivery.Zone.New />
                </div>
                <Delivery.Zone.Card className="space-y-2" init={deliveryInitInPublic} />
              </Tab.Panel>
            </Tab>
          </div>
        );
      }}
    />
  );
}
