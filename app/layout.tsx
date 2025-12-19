export const metadata = {
  title: "LabDomotica",
  description: "Domótica e IoT real: pruebas, reviews y automatización"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
