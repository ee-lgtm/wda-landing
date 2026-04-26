"use client";

import { useActionState } from "react";
import { useEffect, useRef, useState } from "react";
import { submitContact, type FormResult } from "./actions";

type FieldErrors = Record<string, string>;

const initialState: FormResult = { success: false, errors: {} };

function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.get("company")?.toString().trim()) errors.company = "Company is required.";
  if (!data.get("name")?.toString().trim()) errors.name = "Full name is required.";
  if (!data.get("region")?.toString().trim()) errors.region = "Please select a region.";
  if (!data.get("contact")?.toString().trim()) errors.contact = "Contact is required.";
  return errors;
}

export default function ContactForm() {
  const [clientErrors, setClientErrors] = useState<FieldErrors>({});
  const [result, action, isPending] = useActionState(submitContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  const serverErrors = !result.success && "errors" in result ? result.errors : {};
  const errors = { ...serverErrors, ...clientErrors };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const data = new FormData(e.currentTarget);
    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      e.preventDefault();
      setClientErrors(errs);
    } else {
      setClientErrors({});
    }
  }

  if (result.success) {
    return (
      <div className="rounded-2xl border border-zinc-100 bg-zinc-50 px-8 py-12 text-center">
        <p className="mb-2 text-xl font-semibold text-zinc-900">Message received.</p>
        <p className="text-zinc-500">We'll be in touch within one business day.</p>
      </div>
    );
  }

  const fieldClass = (name: string) =>
    [
      "w-full rounded-xl border px-4 py-3 text-sm text-zinc-900 outline-none transition-colors",
      "placeholder:text-zinc-400",
      errors[name]
        ? "border-red-300 bg-red-50 focus:border-red-400"
        : "border-zinc-200 bg-white focus:border-zinc-400",
    ].join(" ");

  return (
    <form ref={formRef} action={action} onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Company */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-zinc-700" htmlFor="company">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Acme Inc."
          className={fieldClass("company")}
        />
        {errors.company && (
          <p className="mt-1.5 text-xs text-red-500">{errors.company}</p>
        )}
      </div>

      {/* Full name */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-zinc-700" htmlFor="name">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Jane Smith"
          className={fieldClass("name")}
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Region */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-zinc-700" htmlFor="region">
          Region
        </label>
        <select
          id="region"
          name="region"
          defaultValue=""
          className={[
            fieldClass("region"),
            "appearance-none bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2371717a' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")] bg-[right_1rem_center] bg-no-repeat pr-10",
          ].join(" ")}
        >
          <option value="" disabled>
            Select a region…
          </option>
          <option value="china">China</option>
          <option value="central-asia">Central Asia</option>
        </select>
        {errors.region && (
          <p className="mt-1.5 text-xs text-red-500">{errors.region}</p>
        )}
      </div>

      {/* Contact */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-zinc-700" htmlFor="contact">
          Contact
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          placeholder="Email, phone, or WeChat"
          className={fieldClass("contact")}
        />
        {errors.contact && (
          <p className="mt-1.5 text-xs text-red-500">{errors.contact}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-50"
      >
        {isPending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
