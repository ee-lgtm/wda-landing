"use client";

export default function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to API route or form provider
  }

  return (
    <form className="max-w-2xl" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-xs font-medium text-zinc-500">
            Название компании
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400 transition-colors"
            placeholder="ООО Компания"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-medium text-zinc-500">
            ФИО
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400 transition-colors"
            placeholder="Иванов Иван Иванович"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="position" className="text-xs font-medium text-zinc-500">
            Должность
          </label>
          <input
            id="position"
            type="text"
            autoComplete="organization-title"
            className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400 transition-colors"
            placeholder="Директор по маркетингу"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact" className="text-xs font-medium text-zinc-500">
            Контакт для связи
          </label>
          <input
            id="contact"
            type="text"
            autoComplete="email"
            className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400 transition-colors"
            placeholder="email, телефон или мессенджер"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor="request" className="text-xs font-medium text-zinc-500">
          Запрос
        </label>
        <textarea
          id="request"
          rows={5}
          className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400 transition-colors resize-none"
          placeholder="Опишите задачу, регион, сроки и любые важные детали"
        />
      </div>

      {/* Privacy consent */}
      <label className="mt-6 flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-zinc-900"
        />
        <span className="text-sm leading-relaxed text-zinc-500">
          Я ознакомлен(а) и принимаю условия политики в отношении обработки
          персональных данных
        </span>
      </label>

      <div className="mt-8">
        <button
          type="submit"
          className="rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
        >
          Отправить заявку
        </button>
      </div>
    </form>
  );
}
