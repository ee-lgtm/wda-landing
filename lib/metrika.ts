// Номер счётчика Яндекс Метрики (можно переопределить через NEXT_PUBLIC_YM_ID)
export const YM_ID = Number(process.env.NEXT_PUBLIC_YM_ID) || 114673110;

/**
 * Официальный код счётчика. Рендерится сервером прямо в <head>,
 * чтобы он был в HTML (это нужно и для проверки счётчика в Метрике,
 * и чтобы визит засчитывался до загрузки остального JS).
 */
export function metrikaSnippet(id: number) {
  return `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=${id}','ym');ym(${id},'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});`;
}

/**
 * Отправляет достижение цели в Метрику.
 * Цель с таким идентификатором нужно создать в интерфейсе Метрики:
 * Цели → Добавить цель → JavaScript-событие.
 */
export function reachGoal(goal: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.ym?.(YM_ID, "reachGoal", goal, params);
}
