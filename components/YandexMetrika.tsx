"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";

declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: unknown[]) => void;
  }
}

// Отправляет хит при клиентской навигации (App Router не перезагружает страницу).
function PageHits({ id }: { id: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirst = useRef(true);

  useEffect(() => {
    // Первый хит отправляет сам init
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    const qs = searchParams.toString();
    window.ym?.(id, "hit", pathname + (qs ? `?${qs}` : ""));
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
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=${id}", "ym");

          ym(${id}, "init", {
            ssr: true,
            webvisor: true,
            clickmap: true,
            ecommerce: "dataLayer",
            referrer: document.referrer,
            url: location.href,
            accurateTrackBounce: true,
            trackLinks: true
          });
        `}
      </Script>
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
