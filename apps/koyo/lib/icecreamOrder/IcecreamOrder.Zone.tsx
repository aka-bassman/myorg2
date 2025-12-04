"use client";
import { clsx } from "@akanjs/client";
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

interface InsightProps {
  className?: string;
  sliceName?: string;
}
export const Insight = ({ className, sliceName = "icecreamOrder" }: InsightProps) => {
  const icecreamOrderInsight = st.slice[sliceName as "icecreamOrder"].use.icecreamOrderInsight();
  return (
    <div className={clsx("flex items-center gap-2", className)}>
      <div className="text-2xl font-bold">{icecreamOrderInsight.yogurtIcecreamQty}</div>
      <div className="text-2xl font-bold">{icecreamOrderInsight.fruitRingQty}</div>
      <div className="text-2xl font-bold">{icecreamOrderInsight.oreoQty}</div>
      <div className="text-2xl font-bold">{icecreamOrderInsight.strawberryQty}</div>
      <div className="text-2xl font-bold">{icecreamOrderInsight.mangoQty}</div>
      <div className="text-2xl font-bold">{icecreamOrderInsight.cheeseCubeQty}</div>
      <div className="text-2xl font-bold">{icecreamOrderInsight.cornQty}</div>
      <div className="text-2xl font-bold">{icecreamOrderInsight.granolaQty}</div>
      <div className="text-2xl font-bold">{icecreamOrderInsight.bananaQty}</div>
      <div className="text-2xl font-bold">{icecreamOrderInsight.figQty}</div>
    </div>
  );
};
