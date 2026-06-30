import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quanivo - Quantum Wellness Redefined",
  description: "State-of-the-art bio-wellness pods and equipment for businesses and homes. Harness quantum energy, light therapy, and vibrational healing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}