import type { MenuCategory } from "@/lib/menu";

export default function MenuSection({
  category,
}: {
  category: MenuCategory;
}) {
  return (
    <section>
      <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-purple-900">
            {category.title}
          </h2>
          {category.subtitle ? (
            <p className="mt-1 text-slate-600">{category.subtitle}</p>
          ) : null}
        </div>

        {/* Items */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {category.items.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
            >
              <p className="text-lg font-bold text-slate-900">
                {item.name}
              </p>

              {item.description ? (
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              ) : null}

              {item.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
