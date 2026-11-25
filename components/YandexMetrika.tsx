"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";

declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: unknown[]) => void;
  }
}

// Сам код счётчика (init) рендерится сервером в <head> — см. metrikaSnippet()
// в lib/metrika.ts. Здесь только то, что требует клиента.

// Отправляет хит при клиентской навигации (App Router не перезагружает страницу).
function PageHits({ id }: { id: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevUrl = useRef<string | null>(null);

  useEffect(() => {
    const url = window.location.href;
    // Первый хит отправляет init из <head>
    if (prevUrl.current !== null && prevUrl.current !== url) {
      window.ym?.(id, "hit", url, { referer: prevUrl.current });
    }
    prevUrl.current = url;
  }, [id, pathname, searchParams]);

  return null;
}

// Клики по элементам с data-goal="..." отправляются как цели.
// Дополнительно можно передать data-goal-label — уйдёт в параметры визита.
function GoalClicks({ id }: { id: number }) {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-goal]");
      if (!el?.dataset.goal) return;
      const label = el.dataset.goalLabel;
      window.ym?.(id, "reachGoal", el.dataset.goal, label ? { label } : undefined);
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [id]);

  return null;
}

export default function YandexMetrika({ id }: { id: number }) {
  return (
    <>
      <GoalClicks id={id} />
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://mc.yandex.ru/watch/${id}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
      <Suspense fallback={null}>
        <PageHits id={id} />
      </Suspense>
    </>
  );
}
