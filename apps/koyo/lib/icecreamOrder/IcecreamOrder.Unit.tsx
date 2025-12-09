import { clsx, ModelProps } from "@akanjs/client";
import { Model } from "@akanjs/ui";
import { cnst, IcecreamOrder, usePage } from "@koyo/client";

interface CardProps extends ModelProps<"icecreamOrder", cnst.LightIcecreamOrder> {
  showControls?: boolean;
}
export const Card = ({ icecreamOrder, showControls = true }: CardProps) => {
  const { l } = usePage();
  return (
    <div className="group flex w-full flex-wrap justify-between gap-2 overflow-hidden rounded-xl bg-linear-to-br from-pink-100 via-yellow-50 to-pink-200 px-8 py-6 shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2 text-lg font-semibold text-pink-700">
          <span className="inline-block rounded bg-pink-200 px-2 py-1 text-xs font-bold tracking-wider uppercase">
            {l("icecreamOrder.id")}
          </span>
          <span className="ml-2 font-mono text-pink-900">#{icecreamOrder.id.slice(-4)}</span>
          <span
            className={clsx("ml-2 rounded px-2 py-1 text-xs font-semibold uppercase", {
              "bg-pink-300 text-pink-900": icecreamOrder.serveType === "forHere",
              "bg-yellow-300 text-yellow-900": icecreamOrder.serveType === "takeOut",
              "bg-blue-200 text-blue-900": icecreamOrder.serveType === "delivery",
            })}
          >
            {l(`serveType.${icecreamOrder.serveType}`)}
          </span>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="inline-block rounded bg-yellow-200 px-2 py-1 text-xs font-bold tracking-wider text-yellow-800 uppercase">
            {l("icecreamOrder.status")}
          </span>
          <span
            className={clsx("ml-2 rounded-full px-3 py-1 text-sm font-semibold", {
              "bg-green-100 text-green-700": icecreamOrder.status === "active",
              "bg-blue-100 text-blue-700": icecreamOrder.status === "processing",
              "bg-red-100 text-red-700": icecreamOrder.status === "served",
              "bg-purple-100 text-purple-700": icecreamOrder.status === "finished",
              "bg-gray-100 text-gray-700": icecreamOrder.status === "canceled",
            })}
          >
            {l(`icecreamOrderStatus.${icecreamOrder.status}`)}
          </span>
        </div>
      </div>
      {showControls ? (
        <div className="bg-base-100/50 flex items-center justify-center gap-2 rounded-xl p-4">
          <Model.ViewWrapper sliceName="icecreamOrder" modelId={icecreamOrder.id}>
            <button className="btn btn-primary">
              <span>{l.trans({ en: "View", ko: "보기" })}</span>
            </button>
          </Model.ViewWrapper>
          <IcecreamOrder.Util.Process icecreamOrderId={icecreamOrder.id} disabled={icecreamOrder.status !== "active"} />
          <IcecreamOrder.Util.Serve
            icecreamOrderId={icecreamOrder.id}
            disabled={icecreamOrder.status !== "processing"}
          />
          <IcecreamOrder.Util.Finish icecreamOrderId={icecreamOrder.id} disabled={icecreamOrder.status !== "served"} />
          <IcecreamOrder.Util.Cancel icecreamOrderId={icecreamOrder.id} disabled={icecreamOrder.status !== "active"} />
        </div>
      ) : null}
    </div>
  );
};
