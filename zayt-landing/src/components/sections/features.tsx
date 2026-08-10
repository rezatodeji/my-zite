"use client";

import {
  FileText,
  FileSearch,
  Warehouse,
  ArrowRightFromLine,
  PackageCheck,
  TrendingUp,
  Users,
  Handshake,
  BarChart3,
  UserCog,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group flex gap-4 rounded-xl bg-white p-6 shadow-sm border border-slate-200 transition-all hover:shadow-md hover:border-primary/30">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

const features = [
  {
    icon: FileText,
    title: "فاکتور فروش و خرید",
    description: "صدور فاکتورهای حرفه‌ای فروش و خرید با قالب‌بندی قابل تنظیم.",
  },
  {
    icon: FileSearch,
    title: "پیش‌فاکتور و سفارش",
    description: "ثبت پیش‌فاکتورها و سفارشات مشتریان قبل از صدور فاکتور نهایی.",
  },
  {
    icon: Warehouse,
    title: "مدیریت انبار",
    description: "مدیریت کامل انبار با قابلیت ثبت کالا، موجودی و قیمت‌گذاری.",
  },
  {
    icon: ArrowRightFromLine,
    title: "حواله خروج انبار",
    description: "صدور حواله خروج برای تحویل کالا با ثبت دقیق در انبار.",
  },
  {
    icon: PackageCheck,
    title: "رسید کالا",
    description: "ثبت رسید ورودی کالا و به‌روزرسانی خودکار موجودی انبار.",
  },
  {
    icon: TrendingUp,
    title: "ثبت سود و زیان",
    description: "محاسبه خودکار سود و زیان هر معامله برای تحلیل سودآوری.",
  },
  {
    icon: Users,
    title: "مدیریت طرفین حساب",
    description: "مدیریت مشتریان، تأمین‌کنندگان و سایر طرفین حساب با جزئیات کامل.",
  },
  {
    icon: Handshake,
    title: "ثبت خدمات همکاران",
    description: "ثبت و پیگیری خدمات، قراردادها و تعاملات با همکاران.",
  },
  {
    icon: BarChart3,
    title: "گزارش‌گیری مالی",
    description: "گزارش‌های دقیق و تعاملی از وضعیت مالی، فروش و موجودی.",
  },
  {
    icon: UserCog,
    title: "مدیریت دسترسی کاربران",
    description: "تعریف کاربران و سطوح دسترسی مختلف برای امنیت بیشتر.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            امکانات کامل سامانه زایت
          </h2>
          <p className="text-lg text-slate-600">
            تمام ابزارهای مورد نیاز برای مدیریت حرفه‌ای کسب‌وکار شما در یک پلتفرم آنلاین
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
