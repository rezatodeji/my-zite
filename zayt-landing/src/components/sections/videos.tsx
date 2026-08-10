"use client";

import { Play, Eye } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "معرفی سامانه حسابداری زایت",
    description: "نمای کلی از امکانات و قابلیت‌های سامانه زایت",
    duration: "۳:۴۵",
    views: "۱.۲K",
    thumbnail: "🎬",
  },
  {
    id: 2,
    title: "آموزش ثبت فاکتور فروش",
    description: "نحوه صدور فاکتور فروش در کمتر از ۲ دقیقه",
    duration: "۲:۱۵",
    views: "۸۵۰",
    thumbnail: "📄",
  },
  {
    id: 3,
    title: "مدیریت انبار و موجودی",
    description: "ثبت کالا، رسید و حواله خروج در زایت",
    duration: "۴:۲۰",
    views: "۶۳۰",
    thumbnail: "📦",
  },
  {
    id: 4,
    title: "گزارش‌گیری مالی و تحلیل سود",
    description: "مشاهده گزارش‌های مالی و محاسبه سود و زیان",
    duration: "۵:۱۰",
    views: "۴۲۰",
    thumbnail: "📊",
  },
  {
    id: 5,
    title: "مدیریت طرفین حساب",
    description: "ثبت مشتریان، تأمین‌کنندگان و طرفین حساب دیگر",
    duration: "۲:۵۰",
    views: "۳۱۰",
    thumbnail: "👥",
  },
  {
    id: 6,
    title: "شروع کار با زایت",
    description: "ثبت نام و تنظیمات اولیه حساب کاربری",
    duration: "۱:۴۰",
    views: "۱.۵K",
    thumbnail: "🚀",
  },
];

export default function Videos() {
  return (
    <section id="videos" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            ویدئوهای معرفی و آموزشی
          </h2>
          <p className="text-lg text-slate-600">
            با تماشای ویدئوهای زیر، در کمترین زمان با سامانه زایت آشنا شوید
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer rounded-xl bg-white shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md hover:border-primary/30"
            >
              <div className="relative aspect-video bg-slate-100 flex items-center justify-center">
                <span className="text-4xl">{video.thumbnail}</span>
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg transition-transform group-hover:scale-110">
                    <Play className="h-6 w-6 fill-current mr-[-2px]" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-xs text-white">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-slate-600 mb-3">{video.description}</p>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <Eye className="h-3.5 w-3.5" />
                  <span>{video.views} بازدید</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
