"use client";

import { useState } from "react";
import { Film, MessageSquare, Settings, LogOut, Plus, Trash2, Edit, Save } from "lucide-react";

type Tab = "content" | "videos" | "requests" | "settings";

interface VideoItem {
  id: number;
  title: string;
  description: string;
}

interface RequestItem {
  id: number;
  name: string;
  phone: string;
  company: string;
  type: string;
  date: string;
}

const initialVideos: VideoItem[] = [
  { id: 1, title: "معرفی سامانه حسابداری زایت", description: "نمای کلی از امکانات و قابلیت‌های سامانه" },
  { id: 2, title: "آموزش ثبت فاکتور فروش", description: "نحوه صدور فاکتور فروش در کمتر از ۲ دقیقه" },
  { id: 3, title: "مدیریت انبار و موجودی", description: "ثبت کالا، رسید و حواله خروج در زایت" },
];

const initialRequests: RequestItem[] = [
  { id: 1, name: "علی محمدی", phone: "۰۹۱۲۳۴۵۶۷۸۹", company: "آهن‌فروشی محمدی", type: "شروع دوره آزمایشی", date: "۱۴۰۳/۰۵/۱۰" },
  { id: 2, name: "رضا کریمی", phone: "۰۹۳۵۶۷۸۹۰۱۲", company: "فروشگاه کیمیا", type: "درخواست دمو", date: "۱۴۰۳/۰۵/۰۹" },
  { id: 3, name: "مریم حسینی", phone: "۰۹۱۸۷۶۵۴۳۲۱", company: "آهن‌فروشی حسین", type: "خرود اشتراک", date: "۱۴۰۳/۰۵/۰۸" },
];

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("content");
  const [videos, setVideos] = useState<VideoItem[]>(initialVideos);
  const [requests] = useState<RequestItem[]>(initialRequests);
  const [siteTitle, setSiteTitle] = useState("زایت | سامانه حسابداری آنلاین");
  const [siteDesc, setSiteDesc] = useState("سامانه حسابداری آنلاین برای کسب‌وکار شما");
  const [newVideo, setNewVideo] = useState({ title: "", description: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("رمز عبور اشتباه است");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg border border-slate-200">
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white font-bold text-xl">
              ز
            </div>
            <h1 className="text-2xl font-bold text-slate-900">پنل مدیریت</h1>
            <p className="text-sm text-slate-600 mt-1">برای ورود رمز عبور را وارد کنید</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                رمز عبور
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="رمز عبور را وارد کنید"
              />
            </div>
            {error && (
              <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="w-full rounded-xl bg-primary py-3 text-base font-medium text-white hover:bg-primary-dark transition-colors"
            >
              ورود به پنل
            </button>
          </form>
          <p className="text-xs text-slate-400 text-center mt-6">
            رمز پیش‌فرض: admin123
          </p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "content" as Tab, label: "محتوا", icon: Edit },
    { id: "videos" as Tab, label: "ویدئوها", icon: Film },
    { id: "requests" as Tab, label: "درخواست‌ها", icon: MessageSquare },
    { id: "settings" as Tab, label: "تنظیمات", icon: Settings },
  ];

  const addVideo = () => {
    if (!newVideo.title.trim()) return;
    setVideos([...videos, { ...newVideo, id: Date.now() }]);
    setNewVideo({ title: "", description: "" });
  };

  const deleteVideo = (id: number) => {
    setVideos(videos.filter((v) => v.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white font-bold">
                ز
              </div>
              <span className="text-lg font-bold text-slate-900">پنل مدیریت زایت</span>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              خروج
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <aside className="lg:col-span-1">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-primary text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          <main className="lg:col-span-4">
            {activeTab === "content" && (
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-6">مدیریت محتوای سایت</h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      عنوان سایت
                    </label>
                    <input
                      type="text"
                      value={siteTitle}
                      onChange={(e) => setSiteTitle(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      توضیحات سایت
                    </label>
                    <textarea
                      value={siteDesc}
                      onChange={(e) => setSiteDesc(e.target.value)}
                      rows={3}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    ></textarea>
                  </div>
                  <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-dark transition-colors">
                    <Save className="h-4 w-4" />
                    ذخیره تغییرات
                  </button>
                </div>
              </div>
            )}

            {activeTab === "videos" && (
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-6">مدیریت ویدئوها</h2>
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={newVideo.title}
                      onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
                      placeholder="عنوان ویدئو"
                      className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <input
                      type="text"
                      value={newVideo.description}
                      onChange={(e) => setNewVideo({ ...newVideo, description: e.target.value })}
                      placeholder="توضیحات"
                      className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <button
                    onClick={addVideo}
                    className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                    افزودن ویدئو
                  </button>
                </div>
                <div className="space-y-3">
                  {videos.map((video) => (
                    <div
                      key={video.id}
                      className="flex items-center justify-between rounded-lg border border-slate-200 p-4"
                    >
                      <div>
                        <h3 className="font-medium text-slate-900">{video.title}</h3>
                        <p className="text-sm text-slate-600">{video.description}</p>
                      </div>
                      <button
                        onClick={() => deleteVideo(video.id)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "requests" && (
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-6">درخواست‌های ثبت شده</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-right">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="pb-3 text-sm font-medium text-slate-500">نام</th>
                        <th className="pb-3 text-sm font-medium text-slate-500">تلفن</th>
                        <th className="pb-3 text-sm font-medium text-slate-500">شرکت</th>
                        <th className="pb-3 text-sm font-medium text-slate-500">نوع درخواست</th>
                        <th className="pb-3 text-sm font-medium text-slate-500">تاریخ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {requests.map((req) => (
                        <tr key={req.id}>
                          <td className="py-3 text-sm text-slate-900">{req.name}</td>
                          <td className="py-3 text-sm text-slate-600" dir="ltr">{req.phone}</td>
                          <td className="py-3 text-sm text-slate-600">{req.company}</td>
                          <td className="py-3 text-sm text-slate-600">{req.type}</td>
                          <td className="py-3 text-sm text-slate-500">{req.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-6">تنظیمات سایت</h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      تغییر رمز عبور
                    </label>
                    <input
                      type="password"
                      placeholder="رمز عبور جدید"
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      آدرس سایت
                    </label>
                    <input
                      type="text"
                      value="https://zayt.ir"
                      readOnly
                      className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-500"
                    />
                  </div>
                  <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-dark transition-colors">
                    <Save className="h-4 w-4" />
                    ذخیره تنظیمات
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
