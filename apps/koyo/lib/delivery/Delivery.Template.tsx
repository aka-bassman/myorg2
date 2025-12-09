"use client";
import { Field, Layout } from "@akanjs/ui";
import { cnst, st, usePage } from "@koyo/client";

interface DeliveryEditProps {
  className?: string;
}

export const General = ({ className }: DeliveryEditProps) => {
  const deliveryForm = st.use.deliveryForm();
  const { l } = usePage();
  return (
    <Layout.Template className={className}>
      <Field.Children
        label={l("delivery.icecreamOrders")}
        desc={l("delivery.icecreamOrders.desc")}
        sliceName="icecreamOrderInDelivery"
        initArgs={["served"]}
        value={deliveryForm.icecreamOrders}
        onChange={st.do.setIcecreamOrdersOnDelivery}
        renderOption={(icecreamOrder: cnst.LightIcecreamOrder) => (
          <div key={icecreamOrder.id}>#{icecreamOrder.id.slice(-4)}</div>
        )}
      />
    </Layout.Template>
  );
};
