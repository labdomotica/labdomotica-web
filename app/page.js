export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-6">
      
      {/* LOGO */}
      <img
        src="/logo.png"
        alt="LabDomotica"
        className="w-52 mb-10"
      />

      {/* TEXTO */}
      <h1 className="text-3xl font-semibold mb-4">
        Estamos trabajando en LabDomotica
      </h1>

      <p className="max-w-xl text-white/75 mb-10 leading-relaxed">
        Estamos preparando reviews técnicas, guías prácticas y proyectos reales
        de domótica e IoT.
        <br /><br />
        El contenido se publica solo cuando está probado y documentado.
      </p>

      {/* CONTACTO */}
      <div className="flex gap-10 items-center">
        <a
          href="https://www.youtube.com/@labdomotica"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <img src="/icons/youtube.svg" alt="YouTube" className="w-8 opacity-80 hover:opacity-100 transition" />
        </a>

        <a
          href="https://www.instagram.com/labdomotica"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img src="/icons/instagram.svg" alt="Instagram" className="w-8 opacity-80 hover:opacity-100 transition" />
        </a>

        <a
          href="mailto:contacto@labdomotica.com"
          aria-label="Email"
        >
          <img src="/icons/email.svg" alt="Email" className="w-8 opacity-80 hover:opacity-100 transition" />
        </a>
      </div>

    </main>
  );
}
