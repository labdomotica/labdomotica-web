"use client";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[#0F172A] text-[#F8FAFC]">
      
      {/* LOGO */}
      <img
        src="/logo.png"
        alt="LabDomotica"
        className="w-48 mb-10"
      />

      {/* TEXTO PRINCIPAL */}
      <h1 className="text-3xl font-semibold mb-4">
        Estamos trabajando en LabDomotica
      </h1>

      <p className="max-w-xl text-[#F8FAFC]/80 mb-10">
        Estamos preparando reviews técnicas, guías prácticas y proyectos reales de
        domótica e IoT.
        <br /><br />
        El contenido se publica solo cuando está probado y documentado.
        <br /><br />
        Mientras tanto, puedes seguir el proyecto o contactar con nosotros aquí:
      </p>

      {/* ICONOS */}
      <div className="flex gap-10 text-[#F8FAFC]/80">

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@labdomotica"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="hover:text-[#84cc16] transition"
        >
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.5 6.2s-.2-1.7-.9-2.5c-.9-.9-1.9-.9-2.4-1C16.7 2.5 12 2.5 12 2.5h0s-4.7 0-8.2.2c-.5.1-1.5.1-2.4 1-.7.8-.9 2.5-.9 2.5S.3 8.2.3 10.2v1.9c0 2 .2 4 .2 4s.2 1.7.9 2.5c.9.9 2.1.9 2.6 1 1.9.2 8 .3 8 .3s4.7 0 8.2-.2c.5-.1 1.5-.1 2.4-1 .7-.8.9-2.5.9-2.5s.2-2 .2-4v-1.9c0-2-.2-4-.2-4zM9.5 14.5v-5l5 2.5-5 2.5z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/labdomotica"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-[#84cc16] transition"
        >
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.2.6-.5 1-.9 1.5-.5.5-.9.8-1.5 1-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.2-.6.5-1 .9-1.5.5-.5.9-.8 1.5-1 .5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0 3.6a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-10.9a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"/>
          </svg>
        </a>

        {/* Email */}
        <a
          href="mailto:contacto@labdomotica.com"
          aria-label="Email"
          className="hover:text-[#84cc16] transition"
        >
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2 4h20v16H2V4zm10 7l10-5H2l10 5zm0 2L2 8v10h20V8l-10 5z"/>
          </svg>
        </a>

      </div>

    </main>
  );
}
