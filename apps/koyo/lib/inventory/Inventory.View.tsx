import { dayjs } from "@akanjs/base";
import { clsx } from "@akanjs/client";
import { cnst } from "@koyo/client";

interface InventoryViewProps {
  className?: string;
  inventory: cnst.Inventory;
}

export const General = ({ className, inventory }: InventoryViewProps) => {
  return (
    <div className={clsx("w-full space-y-2 rounded-xl bg-purple-50 p-4", className)}>
      <div className="text-lg font-bold text-purple-900">{dayjs(inventory.at).format("YYYY-MM-DD")}</div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {inventory.stocks.map((stock, index) => {
          const status = stock.getStatus();
          const percentage = stock.getPercentage();
          return (
            <div
              key={`${stock.type}-${index}`}
              className={clsx("space-y-3 rounded-xl px-6 py-4 shadow-md", {
                "bg-red-50": status === "empty",
                "bg-yellow-50": status === "low",
                "bg-green-50": status === "normal",
              })}
            >
              <div className="flex items-center justify-between">
                <div
                  className={clsx("rounded px-2 py-1 text-xs font-bold", {
                    "bg-red-200 text-red-800": status === "empty",
                    "bg-yellow-200 text-yellow-800": status === "low",
                    "bg-green-200 text-green-800": status === "normal",
                  })}
                >
                  {stock.type}
                </div>
                <div
                  className={clsx("text-2xl font-bold", {
                    "text-red-700": status === "empty",
                    "text-yellow-700": status === "low",
                    "text-green-700": status === "normal",
                  })}
                >
                  {stock.currentQty} / {stock.totalQty}
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/50">
                  <div
                    className={clsx("h-full", {
                      "bg-red-500": status === "empty",
                      "bg-yellow-500": status === "low",
                      "bg-green-500": status === "normal",
                    })}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  />
                </div>
                <div
                  className={clsx("text-right text-xs font-bold", {
                    "text-red-700": status === "empty",
                    "text-yellow-700": status === "low",
                    "text-green-700": status === "normal",
                  })}
                >
                  {Math.round(percentage)}%
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
