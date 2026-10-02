import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ICU Diagnosis → Treatment & Orders",
  description:
    "Select ICU admission diagnoses to generate a treatment plan and lab/imaging order set.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}
