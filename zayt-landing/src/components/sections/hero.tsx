"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck, Smartphone, BarChart3, Clock } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "آنلاین و تحت وب",
    description: "نیازی به نصب نیست. از هر دستگاه و مرورگر به سامانه دسترسی داشته باشید.",
  },
  {
    icon: Smartphone,
    title: "دسترسی موبایل",
    description: "با موبایل یا تبلت خود کسب‌وکار را از هر مکان مدیریت کنید.",
  },
  {
    icon: BarChart3,
    title: "مدیریت ساده کسب‌وکار",
    description: "رابط کاربری ساده و فارسی برای مدیریت فاکتور، انبار و امور مالی.",
  },
  {
    icon: Clock,
    title: "مناسب آهن‌فروشان",
    description: "طراحی شده با توجه به نیازهای خاص صنف آهن‌فروشان و مشاغل مرتبط.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              سامانه حسابداری آنلاین
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              مدیریت مالی کسب‌وکارتان با
              <span className="text-primary"> سامانه زایت</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              زایت یک پلتفرم حسابداری آنلاین و تحت وب است که به شما کمک می‌کند فاکتورها، انبار، طرفین حساب و گزارش‌های مالی را به سادگی مدیریت کنید. مناسب برای صنف آهن‌فروشان و تمامی کسب‌وکارها.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-primary-dark shadow-lg shadow-primary/25"
              >
                شروع دوره آزمایشی رایگان
                <ArrowLeft className="h-5 w-5 rotate-180" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-medium text-slate-700 transition-colors hover:border-primary hover:text-primary"
              >
                مشاهده امکانات
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <div className="flex -space-x-2 space-x-reverse">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">
                  بیش از ۵۰۰ کسب‌وکار فعال
                </p>
                <p className="text-xs text-slate-500">از سراسر کشور به زایت اعتماد کرده‌اند</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-60"></div>
              <div className="relative rounded-2xl bg-white p-6 shadow-2xl border border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  <span className="mr-2 text-xs text-slate-400">داشبورد زایت</span>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 bg-blue-50 rounded-lg border border-blue-100"></div>
                    <div className="h-20 bg-emerald-50 rounded-lg border border-emerald-100"></div>
                    <div className="h-20 bg-amber-50 rounded-lg border border-amber-100"></div>
                  </div>
                  <div className="h-32 bg-slate-50 rounded-lg border border-slate-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-xl bg-white p-5 shadow-sm border border-slate-200"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
