// Номер счётчика Яндекс Метрики (можно переопределить через NEXT_PUBLIC_YM_ID)
export const YM_ID = Number(process.env.NEXT_PUBLIC_YM_ID) || 114673110;

/**
 * Отправляет достижение цели в Метрику.
 * Цель с таким идентификатором нужно создать в интерфейсе Метрики:
 * Цели → Добавить цель → JavaScript-событие.
 */
export function reachGoal(goal: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.ym?.(YM_ID, "reachGoal", goal, params);
}
