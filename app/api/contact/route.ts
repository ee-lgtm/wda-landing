import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { company, name, position, contact, message, consent, source, plan } =
    await req.json();

  if (consent !== true) {
    return NextResponse.json(
      { error: "Consent to personal data processing is required" },
      { status: 400 }
    );
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      { error: "Telegram credentials not configured" },
      { status: 500 }
    );
  }

  const text = [
    "Новая заявка:",
    "",
    `Страница: ${source || "Главная"}`,
    ...(plan ? [`Тариф: ${plan}`] : []),
    "",
    `Компания: ${company || "—"}`,
    `Имя: ${name || "—"}`,
    `Должность: ${position || "—"}`,
    `Контакт: ${contact || "—"}`,
    `Запрос: ${message || "—"}`,
    "",
    `Согласие на обработку ПДн: да (${new Date().toISOString()})`,
  ].join("\n");

  const res = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    }
  );

  if (!res.ok) {
    const error = await res.text();
    console.error("Telegram API error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
