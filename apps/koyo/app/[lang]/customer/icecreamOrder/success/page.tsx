import { Link, Load } from "@akanjs/ui";
import { usePage } from "@koyo/client";

export default function Page() {
  const { l } = usePage();
  return (
    <Load.Page
      of={Page}
      loader={async () => {
        return await Promise.resolve({} as const);
      }}
      render={() => {
        return (
          <div className="flex min-h-screen flex-col items-center justify-center bg-linear-to-br from-purple-50 via-pink-50 to-blue-50 p-6">
            <div className="w-full max-w-2xl space-y-8 text-center">
              <div className="flex justify-center">
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-linear-to-r from-green-400 to-emerald-500 text-7xl shadow-2xl">
                  ✓
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="bg-linear-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                  {l.trans({ en: "Order Placed!", ko: "주문 완료!" })}
                </h1>
              </div>
              <div className="rounded-2xl bg-white/70 p-8 shadow-xl backdrop-blur-sm">
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2 text-lg text-gray-700">
                    <span className="text-3xl">🎉</span>
                    <span className="font-semibold">
                      {l.trans({ en: "We're preparing your order", ko: "주문을 준비하고 있습니다" })}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {l.trans({
                      en: "Please wait for your order number to be called",
                      ko: "주문 번호가 호출될 때까지 기다려 주세요",
                    })}
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="/customer/icecreamOrder"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-purple-600 via-pink-500 to-blue-500 px-12 py-6 text-2xl font-semibold text-white shadow-2xl transition-all hover:scale-105 hover:from-purple-700 hover:via-pink-600 hover:to-blue-600 hover:shadow-purple-500/50 active:scale-95"
                >
                  <span className="text-4xl">🏠</span>
                  {l.trans({ en: "Place New Order", ko: "새 주문하기" })}
                </Link>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}
