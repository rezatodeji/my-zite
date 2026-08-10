import Link from "next/link";

const footerLinks = [
  {
    title: "محصول",
    links: [
      { href: "#features", label: "امکانات" },
      { href: "#pricing", label: "تعرفه‌ها" },
      { href: "#videos", label: "ویدئوهای آموزشی" },
    ],
  },
  {
    title: "پشتیبانی",
    links: [
      { href: "#contact", label: "تماس با ما" },
      { href: "#contact", label: "ثبت درخواست" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white font-bold text-lg">
                ز
              </div>
              <span className="text-xl font-bold text-slate-900">زایت</span>
            </Link>
            <p className="text-slate-600 max-w-sm leading-relaxed">
              سامانه حسابداری آنلاین زایت، راهکاری مدرن و ساده برای مدیریت مالی کسب‌وکار شما. مناسب برای صنف آهن‌فروشان و تمامی کسب‌وکارهای کوچک و متوسط.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-slate-900 mb-3">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} زایت. تمامی حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-slate-500 hover:text-primary">
              حریم خصوصی
            </Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-primary">
              شرایط استفاده
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
