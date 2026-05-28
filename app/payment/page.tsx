"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

export default function PaymentRedirectPage() {
  const { user, authLoaded } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!authLoaded) return;
    if (!user) {
      router.replace(
        `/login?redirect=${encodeURIComponent(pathname)}&message=${encodeURIComponent(
          "Please sign in or create an account to continue payment."
        )}`
      );
      return;
    }
    router.replace("/checkout");
  }, [authLoaded, user, router, pathname]);

  return (
    <div className="site-container py-16">
      <div className="max-w-2xl mx-auto rounded-3xl border border-[#f0e0f0] bg-white p-8 text-center shadow-xl">
        <p className="text-lg font-semibold" style={{ color: "#1a1a2e" }}>
          Preparing secure checkout...
        </p>
        <p className="mt-3 text-sm text-[#666]">Please wait while we redirect you to the protected payment flow.</p>
      </div>
    </div>
  );
}
