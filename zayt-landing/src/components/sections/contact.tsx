"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, Loader2 } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            ثبت درخواست و تماس با ما
          </h2>
          <p className="text-lg text-slate-600">
            فرم زیر را تکمیل کنید تا کارشناسان ما در کوتاه‌ترین زمان با شما تماس بگیرند
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-2xl bg-white p-8 shadow-sm border border-slate-200">
            {sent ? (
              <div className="text-center py-12">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  درخواست شما ثبت شد!
                </h3>
                <p className="text-slate-600">
                  کارشناسان ما در کمتر از ۲۴ ساعت کاری با شما تماس خواهند گرفت.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      نام و نام خانوادگی
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="مثال: علی محمدی"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      شماره تماس
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    نام شرکت / کسب‌وکار
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="نام شرکت یا مغازه شما"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    نوع درخواست
                  </label>
                  <select className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option>شروع دوره آزمایشی رایگان</option>
                    <option>خرود اشتراک</option>
                    <option>درخواست دمو</option>
                    <option>سوالات فنی</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    پیام
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="پیام خود را بنویسید..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-base font-medium text-white transition-colors hover:bg-primary-dark disabled:opacity-70"
                >
                  {loading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                  {loading ? "در حال ارسال..." : "ارسال درخواست"}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4">راه‌های ارتباطی</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">تلفن تماس</p>
                    <p className="text-sm text-slate-600" dir="ltr">
                      ۰۲۱-۱۲۳۴۵۶۷۸
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">ایمیل</p>
                    <p className="text-sm text-slate-600">info@zayt.ir</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">آدرس</p>
                    <p className="text-sm text-slate-600">تهران، خیابان ولیعصر</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-primary/5 p-6 border border-primary/10">
              <h3 className="font-semibold text-slate-900 mb-2">پشتیبانی سریع</h3>
              <p className="text-sm text-slate-600 mb-4">
                نیاز به راهنمایی دارید؟ با کارشناسان ما تماس بگیرید.
              </p>
              <a
                href="tel:02112345678"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
              >
                <Phone className="h-4 w-4" />
                تماس تلفنی
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
