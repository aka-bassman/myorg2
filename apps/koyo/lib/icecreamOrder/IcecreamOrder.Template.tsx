"use client";
import { cnst, st, usePage } from "@koyo/client";
import { Layout, Field } from "@akanjs/ui";

interface IcecreamOrderEditProps {
  className?: string;
}

export const General = ({ className }: IcecreamOrderEditProps) => {
  const icecreamOrderForm = st.use.icecreamOrderForm();
  const { l } = usePage();
  return (
    <Layout.Template className={className}>
      <Field.ToggleSelect
        label={l("icecreamOrder.size")}
        items={[50, 100, 200].map((size) => ({ label: `${size}cc`, value: size }))}
        value={icecreamOrderForm.size}
        onChange={st.do.setSizeOnIcecreamOrder}
      />
      <Field.MultiToggleSelect
        label={l("icecreamOrder.toppings")}
        items={cnst.Topping}
        value={icecreamOrderForm.toppings}
        onChange={st.do.setToppingsOnIcecreamOrder}
      />
      <Field.Phone
        label={l("icecreamOrder.phone")}
        placeholder="010-0000-0000"
        value={icecreamOrderForm.phone}
        onChange={st.do.setPhoneOnIcecreamOrder}
      />
    </Layout.Template>
  );
};
