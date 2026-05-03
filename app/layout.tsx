import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startup Runway Alerter — Get alerts before running out of money",
  description: "Connects to bank accounts and sends alerts when burn rate threatens runway. Built for startup founders and CFOs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bd3f3b14-8fab-47a5-9291-ecf089ca7e39"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
