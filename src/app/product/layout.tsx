import { ReactNode } from "react";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function ProductLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <section>
          <h1>featured products</h1>
        </section>

        {children}

      </body>
    </html>
  )
}