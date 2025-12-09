
"use client";
import { Model } from "@akanjs/ui";
import { usePage } from "@koyo/client";
import { BiTrash } from "react-icons/bi";

interface RemoveProps {
  deliveryId: string;
}
export const Remove = ({ deliveryId }: RemoveProps) => {
  const { l } = usePage();
  return (
    <Model.Remove modelId={deliveryId} sliceName="delivery">
      <BiTrash /> {l("base.remove")}
    </Model.Remove>
  );
};
