
"use client";
import { Model } from "@akanjs/ui";
import { usePage } from "@koyo/client";
import { BiTrash } from "react-icons/bi";

interface RemoveProps {
  inventoryId: string;
}
export const Remove = ({ inventoryId }: RemoveProps) => {
  const { l } = usePage();
  return (
    <Model.Remove modelId={inventoryId} sliceName="inventory">
      <BiTrash /> {l("base.remove")}
    </Model.Remove>
  );
};
