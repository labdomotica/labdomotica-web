"use client";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full text-center px-6">
      
      {/* LOGO */}
      <img
        src="/logo.png"
        alt="LabDomotica"
        className="w-48 mb-10"
      />

      {/* TÍTULO */}
      <h1 className="text-3xl font-semibold mb-4">
        Estamos trabajando en LabDomotica
      </h1>

      {/* TEXTO */}
      <p className="max-w-xl text-[#F8FAFC]/80 mb-10">
        Estamos preparando reviews técnicas, guías prácticas y proyectos reales de
        domótica e IoT.
        <br /><br />
        El contenido se publica solo cuando está probado y documentado.
        <br /><br />
        Mientras tanto, puedes seguir el proyecto o contactar con nosotros aquí:
      </p>

      {/* ICONOS */}
      <div className="flex gap-10">
        <a
          href="https://www.youtube.com/@labdomotica"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/youtube.svg"
            alt="YouTube"
            className="w-7 opacity-80 hover:opacity-100 transition"
          />
        </a>

        <a
          href="https://www.instagram.com/labdomotica"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/instagram.svg"
            alt="Instagram"
            className="w-7 opacity-80 hover:opacity-100 transition"
          />
        </a>

        <a href="mailto:contacto@labdomotica.com">
          <img
            src="/icons/email.svg"
            alt="Email"
            className="w-7 opacity-80 hover:opacity-100 transition"
          />
        </a>
      </div>

    </main>
  );
}
