import "./globals.css";

export const metadata = {
  title: "LabDomotica",
  description: "Domótica e IoT real",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#0F172A] text-[#F8FAFC]"
      >
        {children}
      </body>
    </html>
  );
}
