import { Inter } from "@next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
interface itemsInfo {
  item: JSX.Element;
}
export default function Items({ item }: any) {
  const img = "https://image.tmdb.org/t/p/w500/";
  const clr =
    item?.vote_average > 5 && item?.vote_average < 7
      ? "#89CB36"
      : item?.vote_average < 5
      ? "#CB3F36"
      : "#4BCB36";
  return (
    //  <Link href={`/${item.id}`}>
    <div className="w-[24.47%] h-[450px] rounded-lg ease-in duration-200 hv-eff relative">
      <div
        className="w-full h-[85%] bg-no-repeat  bg-cover relative"
        style={{
          backgroundImage: `url(${img}${item?.poster_path})`,
        }}
      >
        <button
          className="w-[60px] h-[30px] rounded-md absolute top-2 right-2"
          style={{
            backgroundColor: clr,
          }}
        >
          {item?.vote_average < 1 ? "---" : item?.vote_average}
        </button>
      </div>
      <div>
        <h1 className="text-white">{item?.title}</h1>
        <p className="text-[#F2F60F] capitalize">{item?.genre}</p>
      </div>
      <Link href={`/movie/${item.id}`}>
        <button
          type="button"
          className="text-[#3657CB] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white font-medium rounded-lg text-sm px-14 py-4 mr-2 mb-2 focus:outline-none z-10 btn hidden"
        >
          Посмотреть
        </button>
      </Link>
      <div className="w-full h-[85%] absolute top-0 left-0 bg-[#3657CB] opacity-60 hidden wrp"></div>
    </div>
    //  </Link>
  );
}
