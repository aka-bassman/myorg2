"use client";
import { Field, Layout, Loading } from "@akanjs/ui";
import { cnst, st, usePage } from "@koyo/client";
import { useEffect } from "react";

interface IcecreamOrderEditProps {
  className?: string;
}

export const General = ({ className }: IcecreamOrderEditProps) => {
  const icecreamOrderForm = st.use.icecreamOrderForm();
  const { l } = usePage();
  const todaysInventory = st.use.todaysInventory();
  useEffect(() => {
    void st.do.loadTodaysInventory();
  }, []);
  if (!todaysInventory) return <Loading.Area />;
  else if (!todaysInventory.isInStock("yogurtIcecream"))
    return <div className="flex size-full items-center justify-center text-xl">{l("inventory.outOfStock")}</div>;
  return (
    <Layout.Template className={className}>
      <Field.ToggleSelect
        label={l("icecreamOrder.serveType")}
        items={cnst.ServeType}
        value={icecreamOrderForm.serveType}
        onChange={st.do.setServeTypeOnIcecreamOrder}
      />
      <Field.ToggleSelect
        label={l("icecreamOrder.size")}
        items={[50, 100, 200].map((size) => ({
          label: `${size}cc`,
          value: size,
          disabled: !todaysInventory.isInStock("yogurtIcecream", size),
        }))}
        value={icecreamOrderForm.size}
        onChange={st.do.setSizeOnIcecreamOrder}
      />
      <Field.MultiToggleSelect
        label={l("icecreamOrder.toppings")}
        items={cnst.Topping.map((topping) => ({
          label: topping,
          value: topping,
          disabled: !todaysInventory.isInStock(topping),
        }))}
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
