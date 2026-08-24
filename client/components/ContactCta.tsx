import { Mail } from "lucide-react";

export default function ContactCta() {
  return (
    <section className="bg-[#1a1610] text-white">
      <div className="mx-auto flex max-w-[896px] flex-col gap-8 px-6 py-20 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-20">
        <h2 className="max-w-[390px] font-serif text-[34px] font-light leading-[1.25] sm:text-[38px]">
          Gjerne ta kontakt!
        </h2>
        <div className="flex flex-col gap-3 text-[16px] tracking-[.4px]">
          <a
            href="mailto:selmake9@gmail.com"
            className="flex items-center gap-3 transition-opacity hover:opacity-70"
          >
            <Mail aria-hidden="true" className="h-5 w-5" />
            selmake9@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/selma-b-k-239620324/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 transition-opacity hover:opacity-70"
          >
            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.16 3.5a2.16 2.16 0 1 0 0 4.32 2.16 2.16 0 0 0 0-4.32ZM3.3 9.5h3.72V20H3.3V9.5Zm5.98 0h3.57v1.43h.05c.5-.95 1.72-1.95 3.54-1.95 3.79 0 4.49 2.49 4.49 5.74V20h-3.72v-4.68c0-1.12-.02-2.56-1.56-2.56-1.56 0-1.8 1.22-1.8 2.48V20H9.28V9.5Z" />
            </svg>
            Selma B. Keser
          </a>
        </div>
      </div>
    </section>
  );
}
