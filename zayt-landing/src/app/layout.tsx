import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-vazir",
});

export const metadata: Metadata = {
  title: "زایت | سامانه حسابداری آنلاین برای کسب‌وکار شما",
  description: "زایت یک سامانه حسابداری آنلاین و تحت وب است که برای مدیریت ساده کسب‌وکار، به ویژه مناسب صنف آهن‌فروشان طراحی شده است. با زایت، مدیریت مالی، انبار، فاکتور و گزارش‌گیری را از هر مکان انجام دهید.",
  keywords: [
    "زایت",
    "حسابداری آنلاین",
    "نرم‌افزار حسابداری",
    "فاکتور فروش",
    "مدیریت انبار",
    "سود و زیان",
    "آهن‌فروشان",
    "حسابداری وب",
    "گزارش مالی",
  ],
  authors: [{ name: "زایت" }],
  openGraph: {
    title: "زایت | سامانه حسابداری آنلاین",
    description: "مدیریت ساده کسب‌وکار با سامانه حسابداری آنلاین زایت. مناسب برای صنف آهن‌فروشان.",
    type: "website",
    locale: "fa_IR",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazir.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
