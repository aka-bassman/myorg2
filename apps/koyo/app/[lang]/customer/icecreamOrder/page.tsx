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
            <div className="absolute top-6 right-6 flex gap-2">
              <Link.Lang
                lang="en"
                className="rounded-lg bg-white/70 px-4 py-2 font-semibold text-gray-700 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-md"
              >
                English
              </Link.Lang>
              <Link.Lang
                lang="ko"
                className="rounded-lg bg-white/70 px-4 py-2 font-semibold text-gray-700 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-md"
              >
                한국어
              </Link.Lang>
            </div>
            <div className="w-full max-w-4xl space-y-8 text-center">
              <div className="space-y-4">
                <h1 className="bg-linear-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-7xl font-bold text-transparent duration-1000 md:text-8xl">
                  Koyo
                </h1>
                <p className="text-2xl font-light text-gray-700 delay-150 duration-1000 md:text-3xl">
                  {l.trans({ en: "Korean Yogurt Ice Cream", ko: "한국 요거트 아이스크림" })}
                </p>
                <div className="flex items-center justify-center gap-2 text-lg text-gray-600 delay-300 duration-1000">
                  <span className="text-3xl">🍦</span>
                  <span>{l.trans({ en: "Fresh • Creamy • Delicious", ko: "신선한 • 부드러운 • 맛있는" })}</span>
                  <span className="text-3xl">🍦</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 pt-8 delay-500 duration-1000 sm:flex-row sm:justify-center">
                <Link
                  href="/customer/icecreamOrder/new?serveType=forHere"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-linear-to-r from-purple-600 via-pink-500 to-blue-500 px-10 py-6 text-2xl font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:via-pink-600 hover:to-blue-600 hover:shadow-purple-500/50 active:scale-95 sm:w-auto"
                >
                  <span className="text-4xl">🍽️</span>
                  {l.trans({ en: "For Here", ko: "매장 식사" })}
                </Link>
                <Link
                  href="/customer/icecreamOrder/new?serveType=takeout"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-linear-to-r from-blue-600 via-indigo-500 to-purple-500 px-10 py-6 text-2xl font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:via-indigo-600 hover:to-purple-600 hover:shadow-blue-500/50 active:scale-95 sm:w-auto"
                >
                  <span className="text-4xl">🛍️</span>
                  {l.trans({ en: "Take Out", ko: "포장 주문" })}
                </Link>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}
