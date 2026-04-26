import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { company, name, position, contact, message } = await req.json();

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
    `Компания: ${company || "—"}`,
    `Имя: ${name || "—"}`,
    `Должность: ${position || "—"}`,
    `Контакт: ${contact || "—"}`,
    `Запрос: ${message || "—"}`,
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
