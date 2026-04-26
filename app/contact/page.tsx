import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Studio",
  description: "Tell us what you're building. We'll get back to you within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="mx-auto max-w-5xl px-6 py-28">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-400">
            Contact
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight text-zinc-900">
            Let's build something together.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-500">
            Tell us what you're working on and we'll get back to you within one business day.
          </p>

          <div className="mt-16 grid gap-16 sm:grid-cols-2">
            <ContactForm />

            <div className="space-y-8 sm:pt-1">
              <div>
                <h2 className="mb-1 text-xs font-medium uppercase tracking-widest text-zinc-400">
                  Email
                </h2>
                <a
                  href="mailto:hello@studio.com"
                  className="text-base font-medium text-zinc-900 transition-colors hover:text-zinc-500"
                >
                  hello@studio.com
                </a>
              </div>
              <div>
                <h2 className="mb-1 text-xs font-medium uppercase tracking-widest text-zinc-400">
                  Response time
                </h2>
                <p className="text-zinc-500">Within one business day</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-100">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 text-xs text-zinc-400">
          <span>© {new Date().getFullYear()} Studio</span>
          <a href="/blog" className="hover:text-zinc-600">
            Blog
          </a>
        </div>
      </footer>
    </>
  );
}
