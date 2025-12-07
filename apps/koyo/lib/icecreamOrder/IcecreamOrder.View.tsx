import { clsx } from "@akanjs/client";
import { IcecreamOrder, cnst, usePage } from "@koyo/client";

interface GeneralProps {
  className?: string;
  icecreamOrder: cnst.IcecreamOrder;
}

export const General = ({ className, icecreamOrder }: GeneralProps) => {
  const { l } = usePage();
  return (
    <div className={clsx(className, "mx-auto w-full space-y-6 rounded-xl p-8 shadow-lg")}>
      {/* Header with icon and title */}
      <div className="flex items-center gap-3 border-b pb-4">
        <span className="text-3xl font-extrabold text-pink-600">🍦</span>
        <span className="text-2xl font-bold">{l("icecreamOrder.modelName")}</span>
        <span className="text-base-content/50 ml-auto text-xs">#{icecreamOrder.id}</span>
      </div>

      {/* Order details in a grid layout */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        {/* Size information */}
        <div className="text-base-content/50 font-semibold">{l("icecreamOrder.size")}</div>
        <div>{icecreamOrder.size} cc</div>

        {/* Toppings information */}
        <div className="text-base-content/50 font-semibold">{l("icecreamOrder.toppings")}</div>
        <div className="flex flex-wrap gap-2">
          {icecreamOrder.toppings.length === 0 ? (
            <span className="text-gray-400 italic">{l.trans({ en: "No toppings", ko: "토핑 없음" })}</span>
          ) : (
            icecreamOrder.toppings.map((topping) => (
              <span
                key={topping}
                className="inline-block rounded-full bg-pink-100 px-2 py-1 text-xs font-medium text-pink-700"
              >
                {l(`topping.${topping}`)}
              </span>
            ))
          )}
        </div>

        {/* Status information */}
        <div className="text-base-content/50 font-semibold">{l("icecreamOrder.status")}</div>
        <div>
          <span
            className={clsx("inline-block rounded-full px-2 py-1 text-xs font-semibold", {
              "bg-green-100 text-green-700": icecreamOrder.status === "active",
              "bg-yellow-100 text-yellow-700": icecreamOrder.status === "processing",
              "bg-red-100 text-red-700": icecreamOrder.status === "served",
              "bg-purple-100 text-purple-700": icecreamOrder.status === "finished",
              "bg-gray-100 text-gray-700": icecreamOrder.status === "canceled",
            })}
          >
            {l(`icecreamOrderStatus.${icecreamOrder.status}`)}
          </span>
        </div>

        {/* Timestamps */}
        <div className="text-base-content/50 font-semibold">{l("icecreamOrder.createdAt")}</div>
        <div className="text-gray-500">{icecreamOrder.createdAt.format("YYYY-MM-DD HH:mm:ss")}</div>

        <div className="text-base-content/50 font-semibold">{l("icecreamOrder.updatedAt")}</div>
        <div className="text-gray-500">{icecreamOrder.updatedAt.format("YYYY-MM-DD HH:mm:ss")}</div>
      </div>

      <div className="flex items-center justify-end gap-2">
        <IcecreamOrder.Util.Process icecreamOrderId={icecreamOrder.id} disabled={icecreamOrder.status !== "active"} />
        <IcecreamOrder.Util.Serve icecreamOrderId={icecreamOrder.id} disabled={icecreamOrder.status !== "processing"} />
        <IcecreamOrder.Util.Finish icecreamOrderId={icecreamOrder.id} disabled={icecreamOrder.status !== "served"} />
        <IcecreamOrder.Util.Cancel icecreamOrderId={icecreamOrder.id} disabled={icecreamOrder.status !== "active"} />
      </div>
    </div>
  );
};

interface InsightProps {
  className?: string;
  icecreamOrderInsight: cnst.IcecreamOrderInsight;
}
export const Insight = ({ className, icecreamOrderInsight }: InsightProps) => {
  const { l } = usePage();
  return (
    <div className={clsx("w-full space-y-2 rounded p-4", className)}>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div>
          <div className="text-xs">{l("icecreamOrder.insight.yogurtIcecreamQty")}</div>
          <div className="text-2xl font-bold">{icecreamOrderInsight.yogurtIcecreamQty}</div>
        </div>
        <div>
          <div className="text-xs">{l("icecreamOrder.insight.fruitRingQty")}</div>
          <div className="text-2xl font-bold">{icecreamOrderInsight.fruitRingQty}</div>
        </div>
        <div>
          <div className="text-xs">{l("icecreamOrder.insight.oreoQty")}</div>
          <div className="text-2xl font-bold">{icecreamOrderInsight.oreoQty}</div>
        </div>
        <div>
          <div className="text-xs">{l("icecreamOrder.insight.strawberryQty")}</div>
          <div className="text-2xl font-bold">{icecreamOrderInsight.strawberryQty}</div>
        </div>
        <div>
          <div className="text-xs">{l("icecreamOrder.insight.mangoQty")}</div>
          <div className="text-2xl font-bold">{icecreamOrderInsight.mangoQty}</div>
        </div>
        <div>
          <div className="text-xs">{l("icecreamOrder.insight.cheeseCubeQty")}</div>
          <div className="text-2xl font-bold">{icecreamOrderInsight.cheeseCubeQty}</div>
        </div>
        <div>
          <div className="text-xs">{l("icecreamOrder.insight.cornQty")}</div>
          <div className="text-2xl font-bold">{icecreamOrderInsight.cornQty}</div>
        </div>
        <div>
          <div className="text-xs">{l("icecreamOrder.insight.granolaQty")}</div>
          <div className="text-2xl font-bold">{icecreamOrderInsight.granolaQty}</div>
        </div>
        <div>
          <div className="text-xs">{l("icecreamOrder.insight.bananaQty")}</div>
          <div className="text-2xl font-bold">{icecreamOrderInsight.bananaQty}</div>
        </div>
        <div>
          <div className="text-xs">{l("icecreamOrder.insight.figQty")}</div>
          <div className="text-2xl font-bold">{icecreamOrderInsight.figQty}</div>
        </div>
      </div>
    </div>
  );
};
