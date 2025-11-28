"use client";
import { DefaultOf } from "@akanjs/constant";
import { useInterval } from "@akanjs/next";
import { ClientInit, ClientView } from "@akanjs/signal";
import { Load, Model } from "@akanjs/ui";
import { cnst, IcecreamOrder, st } from "@koyo/client";

interface CardProps {
  className?: string;
  init: ClientInit<"icecreamOrder", cnst.LightIcecreamOrder>;
  showControls?: boolean;
  sliceName?: string;
}
export const Card = ({ className, init, showControls = true, sliceName }: CardProps) => {
  useInterval(() => {
    if (sliceName) void st.slice[sliceName as "icecreamOrder"].do.refreshIcecreamOrder();
  }, 3000);
  return (
    <>
      <Load.Units
        className={className}
        init={init}
        renderItem={(icecreamOrder: cnst.LightIcecreamOrder) => (
          <IcecreamOrder.Unit.Card key={icecreamOrder.id} icecreamOrder={icecreamOrder} showControls={showControls} />
        )}
      />
      {showControls ? (
        <Model.ViewEditModal
          sliceName="icecreamOrderInPublic"
          renderTitle={(icecreamOrder: DefaultOf<cnst.IcecreamOrder>) =>
            `IcecreamOrder - ${icecreamOrder.id ? icecreamOrder.id : "New"}`
          }
          renderView={(icecreamOrder: cnst.IcecreamOrder) => (
            <IcecreamOrder.View.General className="w-full" icecreamOrder={icecreamOrder} />
          )}
          renderTemplate={() => <IcecreamOrder.Template.General />}
        />
      ) : null}
    </>
  );
};

interface ViewProps {
  className?: string;
  view: ClientView<"icecreamOrder", cnst.IcecreamOrder>;
}
export const View = ({ view }: ViewProps) => {
  return (
    <Load.View
      view={view}
      renderView={(icecreamOrder) => <IcecreamOrder.View.General icecreamOrder={icecreamOrder} />}
    />
  );
};
