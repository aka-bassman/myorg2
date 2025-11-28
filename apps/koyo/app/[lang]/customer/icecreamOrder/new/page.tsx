import { Load } from "@akanjs/ui";
import { cnst, IcecreamOrder, usePage } from "@koyo/client";

interface PageProps {
  searchParams: Promise<{
    serveType?: cnst.ServeType["value"];
  }>;
}
export default function Page({ searchParams }: PageProps) {
  const { l } = usePage();
  return (
    <Load.Page
      of={Page}
      loader={async () => {
        const { serveType } = await searchParams;
        const icecreamOrderForm: Partial<cnst.IcecreamOrder> = { serveType };
        return await Promise.resolve({ icecreamOrderForm });
      }}
      render={({ icecreamOrderForm }) => (
        <div className="flex min-h-screen flex-col items-center justify-center bg-linear-to-br from-purple-50 via-pink-50 to-blue-50 p-6">
          <div className="w-full max-w-2xl space-y-8">
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <span className="text-8xl">🍦</span>
              </div>
              <h1 className="bg-linear-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                {l("base.createModel", { model: l("icecreamOrder.modelName") })}
              </h1>
              <p className="text-xl font-light text-gray-600">
                {l.trans({ en: "Customize your perfect treat", ko: "나만의 완벽한 디저트를 만들어보세요" })}
              </p>
            </div>
            <Load.Edit
              className="flex flex-col items-center"
              sliceName="icecreamOrderInPublic"
              edit={icecreamOrderForm}
              type="form"
              onCancel="back"
              onSubmit="/customer/icecreamOrder/success"
            >
              <IcecreamOrder.Template.General />
            </Load.Edit>
          </div>
        </div>
      )}
    />
  );
}
