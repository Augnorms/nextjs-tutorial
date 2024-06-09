"use client"; //turns the component into client component

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
// import { useEffect } from "react";

export default function Dashboard() {
  const navLinks = [
    { id: 1, name: "Register", href: "/register" },
    { id: 2, name: "Forgetpassword", href: "/forget-password" },
    { id: 3, name: "Login", href: "/login" },
  ];

  const route = useRouter();
  const pathname = usePathname();

  const handlenavigate = () => {
    route.push("/product/21");
  };

 

  return (
    <div className="">
      <h1>Dashboard</h1>
      <Link href={"/blog"}>Blog</Link>
      <hr />
      <Link href={"/product"}>Product</Link>
      <hr />
      <Link href={"/product/20"}>Product details</Link>
      <hr />

      <button onClick={handlenavigate}>product details</button>

      <hr />

      {navLinks.map((links) => {
        const isActive = pathname.startsWith(links.href);

        return (
          <Link
            href={links.href}
            key={links.id}
            style={{ display: "block" }}
            className={isActive ? "text-red-500" : ""}
          >
            {links.name}
          </Link>
        );
      })}
    </div>
  );
}
