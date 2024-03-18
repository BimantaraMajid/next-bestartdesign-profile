/* eslint-disable @next/next/no-img-element */
"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import BackToTopButton from "./components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "BestArt Design",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>BestArt Design</title>
      </head>
      <body className={inter.className}>
        <div className="fixed bottom-5 right-5">
          <BackToTopButton />
        </div>
        <header className="fixed top-0 left-0 right-0 max-h-screen">
          <div className="flex items-stretch justify-between h-20 bg-white">
            <Link href="/" className="py-6 pl-4">
              <img
                className="object-cover w-full h-full"
                src="https://i.ibb.co/sb79pFY/IMG-2205.jpg"
                alt="logo-header"
              />
            </Link>
            <div className="flex items-center gap-10">
              
            <div className="hidden text-xs uppercase md:block">
              
              <span className="block text-gray-400"> ada pertanyaan?</span>
              <div className="block font-semibold">
                Hubungi kami
              </div>
            </div>
            <button
              className="p-4 cursor-pointer"
              onClick={() => setIsMenuMobileOpen(!isMenuMobileOpen)}
              >
              <span className="!text-4xl material-icons">
                drag_handle
              </span>
            </button>
              </div>
          </div>

          {isMenuMobileOpen && (
            <div className="flex flex-col items-end h-screen px-4 pt-10 text-3xl gap-7 backdrop-blur-md">
              <Link
                onClick={() => setIsMenuMobileOpen(false)}
                className="text-shadow"
                href="/"
              >
                Home
              </Link>
              <Link
                onClick={() => setIsMenuMobileOpen(false)}
                className="text-shadow"
                href="/proyek"
              >
                Proyek
              </Link>
              <Link
                onClick={() => setIsMenuMobileOpen(false)}
                className="text-shadow"
                href="/blog"
              >
                Blog
              </Link>
              <Link
                onClick={() => setIsMenuMobileOpen(false)}
                className="text-shadow"
                href="/tentang-kami"
              >
                Tentang Kami
              </Link>
              <Link
                onClick={() => setIsMenuMobileOpen(false)}
                className="text-shadow"
                href="/paket-harga"
              >
                Paket Harga
              </Link>
              <Link
                onClick={() => setIsMenuMobileOpen(false)}
                className="text-shadow"
                href="/hubungi-kami"
              >
                Hubungi Kami
              </Link>
            </div>
          )}
        </header>

        <main className="min-h-screen mt-20">{children}</main>

        <footer className="mt-20">
          <div className="aspect-[5/3] relative -z-10">
            <img
              className="object-cover w-full h-full"
              src="https://assets-global.website-files.com/63d0f93b8842ec945ab130c6/642865468fbcbe36efc5769b_img-bg_banner.webp"
              alt="logo-header"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 text-white ">
              <div className="flex flex-col px-4 py-5 gap-7">
                <h3 className="text-4xl font-medium text-center uppercase">
                  Setiap Rumah <br /> punya cerita
                </h3>
                <div className="flex items-center justify-center gap-5 py-5 text-xl uppercase border rounded-full">
                  <i className="material-icons">arrow_forward</i>
                  {/* icon right */}
                  <span>Hubungi Kami</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col px-4 mt-20 gap-7">
            <Link href="/">
              <img
                className="object-cover w-full max-w-28"
                src="https://i.ibb.co/sb79pFY/IMG-2205.jpg"
                alt="logo-header"
              />
            </Link>
            <p>
              Setiap rumah punya cerita. Kami memahami bahwa setiap orang
              berbeda. Karenanya, kami merancang rumah yang sesuai dengan
              karakter Anda masing-masing, sebagaimana setiap rumah punya cerita
              sendiri
            </p>

            <div className="flex flex-col">
              <span className="font-bold">SURABAYA</span>
              <span>Jl. Raya Darmo Permai III No. 28</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">Jakarta</span>
              <span>
                Komplek Warnet Pandu (Depan Apartment Parkland Avenue, Jl. Raya
                Serpong No.99, RT.11/RW.04, Cilenggang, Kec. Serpong, Kota
                Tangerang Selatan, Banten 15311
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">EMAIL ADDRESS</span>
              <span>
                <a href="mailto:admin@bestartdesign.com">
                  admin@bestartdesign.com
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">PHONE NUMBER</span>
              <span>
                <a href="tel:081xxxxxxx">0812xxxxxxx</a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">SOCIAL MEDIA</span>
              <span>Instagram</span>
              <span>TikTok</span>
              <span>LinkedIn</span>
              <span>Youtube</span>
            </div>
          </div>
          <div className="mt-5 bg-gray-50">
            <p className="text-center">
              <small>
              © 2021 BestArt Design. All rights reserved
              </small>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
