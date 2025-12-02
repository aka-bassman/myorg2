
"use client";
import { Load } from "@akanjs/ui";
import { cnst, Inventory } from "@koyo/client";
import { ClientInit, ClientView } from "@akanjs/signal";

interface CardProps {
  className?: string;
  init: ClientInit<"inventory", cnst.LightInventory>;
}
export const Card = ({ className, init }: CardProps) => {
  return (
    <Load.Units
      className={className}
      init={init}
      renderItem={(inventory: cnst.LightInventory) => (
        <Inventory.Unit.Card key={inventory.id} href={`/inventory/${inventory.id}`} inventory={inventory} />
      )}
    />
  );
};

interface ViewProps {
  className?: string;
  view: ClientView<"inventory", cnst.Inventory>;
}
export const View = ({ view }: ViewProps) => {
  return <Load.View view={view} renderView={(inventory) => <Inventory.View.General inventory={inventory} />} />;
};
