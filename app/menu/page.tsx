"use client";

import { useMemo, useState } from "react";
import MenuSection from "@/components/MenuSection";
import { menuCategories } from "@/lib/menu";

export default function MenuPage() {
  const defaultId = menuCategories[0]?.id ?? "loaded-refreshers";
  const [activeId, setActiveId] = useState<string>(defaultId);

  const activeCategory = useMemo(
    () => menuCategories.find((c) => c.id === activeId) ?? menuCategories[0],
    [activeId]
  );

  return (
    <main className="min-h-screen" id="top">
      {/* Smaller Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 to-purple-900 px-6 py-12 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold tracking-wide text-emerald-300">
            Menu
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Find your next favorite.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-purple-100">
            Browse by category — click a section below to view items.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
  href="sms:+15555555555?&body=Hi! I’d like to place an order."
  className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-7 py-3 text-sm font-semibold text-purple-900 shadow-lg transition hover:bg-emerald-400"
>
  Text to Order
</a>


          </div>
        </div>
      </section>

      {/* Category Buttons (Tabs) */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-purple-200 bg-purple-50 p-6">
            <p className="text-sm font-semibold text-purple-900">
              Choose a category
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {menuCategories.map((cat) => {
                const isActive = cat.id === activeId;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveId(cat.id)}
                    className={
                      isActive
                        ? "rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-purple-900 shadow hover:bg-emerald-400"
                        : "rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-semibold text-purple-800 hover:border-emerald-300 hover:text-emerald-700"
                    }
                  >
                    {cat.title}
                  </button>
                );
              })}
            </div>

            
          </div>
        </div>
      </section>

      {/* Active Section Only */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          {activeCategory ? <MenuSection category={activeCategory} /> : null}
        </div>
      </section>
    </main>
  );
}
