"use client";

import { Check, Zap, Building2, Crown } from "lucide-react";

const plans = [
  {
    name: "پایه",
    icon: Zap,
    price: "۲۹۰,۰۰۰",
    period: "تومان / ماه",
    description: "مناسب برای کسب‌وکارهای کوچک",
    features: [
      "تا ۲ کاربر",
      "مدیریت ۵۰۰ فاکتور در ماه",
      "مدیریت انبار",
      "گزارش‌گیری پایه",
      "پشتیبانی ایمیل",
    ],
    cta: "شروع رایگان",
    popular: false,
  },
  {
    name: "حرفه‌ای",
    icon: Building2,
    price: "۵۹۰,۰۰۰",
    period: "تومان / ماه",
    description: "مناسب برای کسب‌وکارهای متوسط",
    features: [
      "تا ۵ کاربر",
      "فاکتور نامحدود",
      "انبار و حواله خروج",
      "گزارش‌گیری پیشرفته",
      "مدیریت طرفین حساب",
      "ثبت سود و زیان",
      "پشتیبانی تلفنی",
    ],
    cta: "شروع رایگان",
    popular: true,
  },
  {
    name: "سازمانی",
    icon: Crown,
    price: "۱,۱۹۰,۰۰۰",
    period: "تومان / ماه",
    description: "مناسب برای کسب‌وکارهای بزرگ",
    features: [
      "کاربران نامحدود",
      "تمام امکانات حرفه‌ای",
      "گزارش‌های سفارشی",
      "API و یکپارچگی",
      "مدیریت دسترسی پیشرفته",
      "پشتیبانی اولویت‌دار",
      "آموزش اختصاصی",
    ],
    cta: "تماس با ما",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            تعرفه‌های استفاده از زایت
          </h2>
          <p className="text-lg text-slate-600">
            پلان مناسب خود را انتخاب کنید و از دوره آزمایشی ۱۴ روزه رایگان بهره‌مند شوید
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-primary text-white shadow-xl scale-105 border-2 border-primary"
                  : "bg-white border border-slate-200 shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-white">
                    محبوب‌ترین
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                    plan.popular ? "bg-white/20" : "bg-primary/10"
                  }`}
                >
                  <plan.icon
                    className={`h-5 w-5 ${plan.popular ? "text-white" : "text-primary"}`}
                  />
                </div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
              </div>

              <p
                className={`text-sm mb-4 ${
                  plan.popular ? "text-white/80" : "text-slate-600"
                }`}
              >
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span
                  className={`text-sm ${
                    plan.popular ? "text-white/70" : "text-slate-500"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`h-5 w-5 shrink-0 mt-0.5 ${
                        plan.popular ? "text-white" : "text-primary"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-xl py-3 text-base font-medium transition-colors ${
                  plan.popular
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-white hover:bg-primary-dark"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
