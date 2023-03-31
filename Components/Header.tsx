import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Header({}) {
  return (
    <>
      <div className="w-[80%] m-auto pt-5 relative z-10">
        <header className="w-full flex items-center justify-between">
          <div>
            <img src="/images/Logo.svg" alt="" />
          </div>
          <nav className="flex items-center gap-5">
            <Link href="#" className="text-white">
              Афиша
            </Link>
            <Link href="#" className="text-white">
              Медиа
            </Link>
            <Link href="#" className="text-white">
              Фильмы
            </Link>
            <Link href="#" className="text-white">
              Актёры
            </Link>
            <Link href="#" className="text-white">
              Новости
            </Link>
            <Link href="#" className="text-white">
              Подборки
            </Link>
            <Link href="#" className="text-white">
              Категории
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <button className="w-[55px] h-[52px] bg-white border border-solid rounded-lg flex justify-center">
              <img src="/images/Search.svg" alt="search" className="m-auto" />
            </button>
            <button
              type="button"
              className="w-[138px] text-white bg-[#3657CB] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Войти
            </button>
          </div>
        </header>
      </div>
    </>
  );
}
