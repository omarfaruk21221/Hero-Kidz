"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Client-only helper that adds a class to <body> for auth routes so we can
// hide the main site's header/footer without changing the existing layout.
export default function HideSiteShell() {
  const pathname = usePathname();

  useEffect(() => {
    const authPrefixes = [
      "/login",
      "/signup",
      "/register",
      "/reset",
      "/forgot",
    ];
    const shouldHide = authPrefixes.some((p) => pathname?.startsWith(p));

    if (shouldHide) document.body.classList.add("hide-site-shell");
    else document.body.classList.remove("hide-site-shell");

    return () => document.body.classList.remove("hide-site-shell");
  }, [pathname]);

  return null;
}
