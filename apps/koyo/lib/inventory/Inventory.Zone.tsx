"use client";
import { useInterval } from "@akanjs/next";
import { ClientInit, ClientView } from "@akanjs/signal";
import { Load, Loading } from "@akanjs/ui";
import { cnst, Inventory, st } from "@koyo/client";

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

interface TodayProps {
  className?: string;
}
export const Today = ({ className }: TodayProps) => {
  const todaysInventory = st.use.todaysInventory();
  useInterval(() => {
    void st.do.loadTodaysInventory();
  }, 1000);
  if (!todaysInventory) return <Loading.Area />;
  return <Inventory.View.General inventory={todaysInventory} />;
};
