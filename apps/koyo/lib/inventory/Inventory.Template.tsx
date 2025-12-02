
"use client";
import { cnst, st, usePage } from "@koyo/client";
import { Layout, Field } from "@akanjs/ui";

interface InventoryEditProps {
  className?: string;
}

export const General = ({ className }: InventoryEditProps) => {
  const inventoryForm = st.use.inventoryForm();
  const { l } = usePage();
  return (
    <Layout.Template className={className}>
      <Field.Text
        label={l("inventory.id")}
        desc={l("inventory.id.desc")}
        value={inventoryForm.id}
        onChange={st.do.setIdOnInventory}
      />
    </Layout.Template>
  );
};
