"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff, Apple, Globe } from "lucide-react";
import { useAuth } from "@/lib/auth-context";

const MotionDiv: any = motion.div;

const tabs = [
  { key: "login", label: "Sign In" },
  { key: "register", label: "Register" },
];

export default function LoginPage() {
  const router = useRouter();
  const [redirectTo, setRedirectTo] = useState("/checkout");
  const [message, setMessage] = useState("");
  const { login, user, authLoaded } = useAuth();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const redirectParam = params.get("redirect");
    const messageParam = params.get("message");

    if (redirectParam) setRedirectTo(redirectParam);
    if (messageParam) setMessage(messageParam);
  }, []);

  useEffect(() => {
    if (!authLoaded) return;
    if (user) {
      router.replace(redirectTo);
    }
  }, [authLoaded, user, redirectTo, router]);

  const handleLogin = () => {
    login({
      id: `user-${Date.now()}`,
      name: form.name || "Glamour Shopper",
      email: form.email || "hello@glamourstore.com",
    });
    router.push(redirectTo);
  };

  const handleRegister = () => {
    login({
      id: `user-${Date.now()}`,
      name: form.name || "New Customer",
      email: form.email || "newuser@glamourstore.com",
    });
    router.push(redirectTo);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#fff7fb_0%,#f7f1ff_40%,#fbf6ff_100%)]">
      <div className="pointer-events-none absolute left-12 top-16 h-72 w-72 rounded-full bg-[#f9d1eb]/40 blur-3xl" />
      <div className="pointer-events-none absolute right-16 top-28 h-64 w-64 rounded-full bg-[#d9b3ff]/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-24 h-80 w-80 rounded-full bg-[#fde9ff]/50 blur-3xl" />

      <div className="relative mx-auto grid min-h-[100vh] max-w-[1440px] items-center gap-10 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-12">
        <MotionDiv
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative hidden h-full overflow-hidden rounded-[40px] border border-white/70 bg-white/25 p-8 shadow-[0_30px_120px_rgba(112,33,120,0.12)] backdrop-blur-[24px] lg:flex lg:flex-col"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.94),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(123,44,191,0.14),_transparent_35%)]" />
          <div className="absolute left-6 top-10 h-28 w-28 rounded-full bg-[#fce8f9]/80 blur-3xl" />
          <div className="absolute right-10 top-24 h-32 w-32 rounded-full bg-[#d6c0ff]/50 blur-3xl" />
          <div className="absolute left-1/2 bottom-20 h-60 w-60 -translate-x-1/2 rounded-full bg-[#fff0fb]/80 blur-3xl" />

          <div className="relative z-10 flex h-full flex-col justify-between gap-10">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-white/70 bg-white/85 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-[#7b2cbf] shadow-sm">
                Luxury beauty
              </span>

              <div className="space-y-5">
                <h1 className="max-w-[680px] text-6xl font-black leading-[1.02] text-[#280030]">Luxury Beauty Starts Here</h1>
                <p className="max-w-[620px] text-lg leading-8 text-[#5f456e]">
                  Discover premium skincare, makeup and wellness products curated for a luxurious self-care experience.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] border border-white/70 bg-white/70 p-5 shadow-[0_16px_60px_rgba(255,255,255,0.9)] backdrop-blur-xl">
                  <p className="text-sm font-semibold text-[#42295c]">Curated Collections</p>
                  <p className="mt-2 text-sm text-[#6f5980]">Handpicked products from the world’s finest brands.</p>
                </div>
                <div className="rounded-[28px] border border-white/70 bg-white/70 p-5 shadow-[0_16px_60px_rgba(255,255,255,0.9)] backdrop-blur-xl">
                  <p className="text-sm font-semibold text-[#42295c]">Exclusive offers</p>
                  <p className="mt-2 text-sm text-[#6f5980]">Members enjoy private drops, rewards and premium shipping.</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-[#fff6fb]/70 p-0 shadow-[0_30px_120px_rgba(138,80,148,0.14)]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff] via-transparent to-[#ffffff]/70" />
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80"
                alt="Luxury beauty showcase"
                className="h-[520px] w-full object-cover rounded-[28px]"
              />
              <div className="absolute left-6 bottom-6 rounded-[28px] border border-white/60 bg-white/75 px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.35em] text-[#7b2cbf]">Inspired by beauty</p>
                <p className="mt-2 text-lg font-semibold text-[#2a0834]">Refine your ritual with glowing essentials.</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-[0_14px_48px_rgba(178,126,207,0.12)] backdrop-blur-xl">
                <p className="text-3xl font-black text-[#4e2f66]">5K+</p>
                <p className="mt-2 text-sm text-[#6f5980]">Premium products</p>
              </div>
              <div className="rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-[0_14px_48px_rgba(178,126,207,0.12)] backdrop-blur-xl">
                <p className="text-3xl font-black text-[#4e2f66]">4.9</p>
                <p className="mt-2 text-sm text-[#6f5980]">Customer rating</p>
              </div>
              <div className="rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-[0_14px_48px_rgba(178,126,207,0.12)] backdrop-blur-xl">
                <p className="text-3xl font-black text-[#4e2f66]">Free</p>
                <p className="mt-2 text-sm text-[#6f5980]">Luxury shipping</p>
              </div>
            </div>
          </div>
        </MotionDiv>

        <div className="flex min-h-[calc(100vh-90px)] items-center justify-center">
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.12 }}
            className="w-full max-w-[520px] rounded-[40px] border border-white/90 bg-[rgba(255,255,255,0.92)] p-[48px] shadow-[0_40px_120px_rgba(23,7,35,0.12)] backdrop-blur-[22px]"
          >
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.45em] text-[#8b3e7a]/80">Glamour Store</p>
                <h2 className="mt-3 text-3xl font-black text-[#26003b]">Premium Account Access</h2>
                <p className="mt-3 text-sm leading-7 text-[#6d5375]">
                  Secure your checkout and enjoy personalised beauty recommendations.
                </p>
              </div>

              <div className="rounded-full bg-[#faf5fb] p-1.5 shadow-sm">
                <div className="flex items-center rounded-full bg-transparent p-1">
                  {tabs.map(tab => (
                    <button
                      key={tab.key}
                      onClick={() => setMode(tab.key as "login" | "register")}
                      type="button"
                      className={`flex-1 text-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                        mode === tab.key
                          ? "bg-gradient-to-r from-[#fc2779] to-[#7b2cbf] text-white shadow-[0_14px_40px_rgba(252,39,121,0.18)]"
                          : "text-[#7f6c8d] hover:text-[#5d3c7c]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5">
                <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  className="flex h-[56px] items-center justify-center gap-3 rounded-[14px] border border-[#ece3f1] bg-white text-sm font-semibold text-[#362a3e] shadow-[0_10px_30px_rgba(55,23,63,0.06)] transition duration-300 hover:-translate-y-1"
                >
                  <Globe size={18} /> Google
                </button>
                <button
                  type="button"
                  className="flex h-[56px] items-center justify-center gap-3 rounded-[14px] border border-[#ece3f1] bg-white text-sm font-semibold text-[#362a3e] shadow-[0_10px_30px_rgba(55,23,63,0.06)] transition duration-300 hover:-translate-y-1"
                >
                  <Apple size={18} /> Apple
                </button>
              </div>

              <div className="relative text-center text-xs uppercase tracking-[0.35em] text-[#a37aab] before:absolute before:left-0 before:top-1/2 before:h-px before:w-16 before:bg-[#e6d6ec] after:absolute after:right-0 after:top-1/2 after:h-px after:w-16 after:bg-[#e6d6ec]">
                <span className="relative bg-[rgba(255,255,255,0.9)] px-3">or sign in with email</span>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <input
                    value={form.email}
                    onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
                    placeholder=" "
                    className="peer w-full h-[58px] rounded-[18px] border border-[#e6dbe9] bg-white/94 px-5 pt-5 text-sm text-[#3f2a50] outline-none transition duration-300 focus:border-[#fc2779] focus:shadow-[0_0_0_6px_rgba(252,39,121,0.12)]"
                  />
                  <label className="pointer-events-none absolute left-5 top-5 text-sm text-[#8f6e9b] transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#a88ab6] peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#7b2cbf]">
                    Email address
                  </label>
                </div>

                {mode === "register" && (
                  <div className="relative">
                    <input
                      value={form.name}
                      onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
                      placeholder=" "
                      className="peer w-full h-[58px] rounded-[18px] border border-[#e6dbe9] bg-white/94 px-5 pt-5 text-sm text-[#3f2a50] outline-none transition duration-300 focus:border-[#fc2779] focus:shadow-[0_0_0_6px_rgba(252,39,121,0.12)]"
                    />
                    <label className="pointer-events-none absolute left-5 top-5 text-sm text-[#8f6e9b] transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#a88ab6] peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#7b2cbf]">
                      Full name
                    </label>
                  </div>
                )}

                <div className="relative">
                  <input
                    value={form.password}
                    onChange={e => setForm(prev => ({ ...prev, password: e.target.value }))}
                    placeholder=" "
                    type={showPass ? "text" : "password"}
                    className="peer w-full h-[58px] rounded-[14px] border border-[#e6dbe9] bg-white/96 px-5 pt-5 pr-14 text-sm text-[#3f2a50] outline-none transition duration-300 focus:border-[#fc2779] focus:shadow-[0_0_0_8px_rgba(252,39,121,0.12)]"
                  />
                  <label className="pointer-events-none absolute left-5 top-5 text-sm text-[#8f6e9b] transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#a88ab6] peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#7b2cbf]">
                    Password
                  </label>
                  <button
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#836887]"
                    type="button"
                  >
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-[#7a5f87]">
                <button className="font-semibold transition hover:text-[#7b2cbf]" type="button">
                  Forgot password?
                </button>
                <button className="font-semibold text-[#7b2cbf] transition hover:text-[#5a1d75]" type="button">
                  Need help?
                </button>
              </div>

              <button
                onClick={mode === "register" ? handleRegister : handleLogin}
                type="button"
                className="w-full rounded-[16px] bg-gradient-to-r from-[#e91a7a] to-[#7b2cbf] h-[58px] text-base font-bold uppercase tracking-[0.06em] text-white shadow-[0_28px_80px_rgba(201,53,129,0.18)] transition duration-300 transform hover:-translate-y-1"
              >
                {mode === "register" ? "Create Account" : "Sign In"}
              </button>
            </div>

            <p className="mt-6 text-center text-xs leading-5 text-[#7a5f87]">
              By continuing, you agree to our <span className="font-semibold text-[#7b2cbf]">Terms & Conditions</span>.
            </p>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
