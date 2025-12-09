"use client";
import { ClientInit, ClientView } from "@akanjs/signal";
import { Load, Model } from "@akanjs/ui";
import { cnst, Delivery, st, usePage } from "@koyo/client";

interface CardProps {
  className?: string;
  init: ClientInit<"delivery", cnst.LightDelivery>;
}
export const Card = ({ className, init }: CardProps) => {
  return (
    <Load.Units
      className={className}
      init={init}
      renderItem={(delivery: cnst.LightDelivery) => <Delivery.Unit.Card key={delivery.id} delivery={delivery} />}
    />
  );
};

interface ViewProps {
  className?: string;
  view: ClientView<"delivery", cnst.Delivery>;
}
export const View = ({ view }: ViewProps) => {
  return <Load.View view={view} renderView={(delivery) => <Delivery.View.General delivery={delivery} />} />;
};

interface NewProps {
  className?: string;
}
export const New = ({ className }: NewProps) => {
  const { l } = usePage();
  return (
    <div className={className}>
      <button
        className="btn btn-primary"
        onClick={() => {
          st.do.newDelivery();
        }}
      >
        + {l("base.createModel", { model: l("delivery.modelName") })}
      </button>
      <Model.EditModal
        sliceName="deliveryInPublic"
        submitOption={{
          onSuccess: (delivery: cnst.Delivery) => {
            st.do.setIcecreamOrder(...delivery.icecreamOrders);
          },
        }}
        onCancel={() => {
          st.do.resetDelivery();
        }}
      >
        <Delivery.Template.General />
      </Model.EditModal>
    </div>
  );
};
