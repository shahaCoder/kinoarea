import { Button } from "@mui/material";
import { Inter } from "@next/font/google";
// import Items from "Components/child/Items";
import { News } from "Components/News";
import { PopularMovies } from "Components/PopularMovies";
import { Releases } from "Components/Releases";
import { Trailers } from "Components/Trailers";
import Link from "next/link";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic'

const DynamicItems = dynamic(() => import('Components/child/Items'), {
  loading: () => <div className="">
  <div className="lds-ripple">
    <div></div>
    <div></div>
  </div>
</div>,
})
const inter = Inter({ subsets: ["latin"] });
const arr2 = [
  {
    id: 1,
    movieName: "Джон Уик 4",
    moviePoster:
      "https://upload.wikimedia.org/wikipedia/ru/3/3b/John_Wick_4_poster.jpg",
    movieTrailer: "https://www.youtube.com/embed/Xpg1EwKgzfM",
    likes: 603,
    dislikes: 3,
    liked: false,
    dislike: false,
  },
  {
    id: 2,
    movieName: "Форсаж 10",
    moviePoster:
      "https://the-flow.ru/uploads/images/catalog/element/63d9fc825c480.jpg",
    movieTrailer: "https://www.youtube.com/embed/a6jJUqnJ19U",
    likes: 889,
    dislikes: 2,
    liked: false,
    dislike: false,
  },
  {
    id: 3,
    movieName: "Аквамен 2",
    moviePoster:
      "https://static.kinoafisha.info/k/movie_posters/1080x1920/upload/movie_posters/6/8/8/8355886/a9d9135606efedac990c2b805fb6f568.jpg",
    movieTrailer: "https://www.youtube.com/embed/6HhoWiv6QZ8",
    likes: 320,
    dislikes: 4,
    liked: false,
    dislike: false,
  },
  {
    id: 4,
    movieName: "Крушение",
    moviePoster:
      "https://www.film.ru/sites/default/files/movies/posters/50410659-2360786.jpeg",
    movieTrailer: "https://www.youtube.com/embed/r_aCiFeRw2Q",
    likes: 330,
    dislikes: 5,
    liked: false,
    dislike: false,
  },
];
export default function Home() {
  const [data, setData]: any = useState();
  const [array, setArray]: any = useState();
  const [show, setShow]: any = useState(false);
  const [active, setActive]: any = useState("Все");
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const arr = [
    {
      id: 943221,
      name: "Ужасы",
    },
    {
      id: 646389,
      name: "Боевик",
    },
    {
      id: 924482,
      name: "триллер",
    },
    {
      id: 888838,
      name: "ужас",
    },
    {
      id: 739405,
      name: "боевик",
    },
    {
      id: 842033,
      name: "ужас",
    },
    {
      id: 676710,
      name: "приключения",
    },
    {
      id: 634429,
      name: "драма",
    },
    {
      id: 848685,
      name: "триллер",
    },
    {
      id: 872954,
      name: "боевик",
    },
    {
      id: 1020696,
      name: "ужас",
    },
    {
      id: 1026563,
      name: "ужас",
    },
    {
      id: 807132,
      name: "драма",
    },
    {
      id: 751171,
      name: "семейный",
    },
    {
      id: 1070005,
      name: "мелодрама",
    },
    {
      id: 1058029,
      name: "комедия",
    },
    {
      id: 1070017,
      name: "мелодрама",
    },
    {
      id: 983526,
      name: "ужас",
    },
    {
      id: 886400,
      name: "драма",
    },
    {
      id: 746524,
      name: "триллер",
    },
  ];
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=eb71330cfd1408b8d73993cb5f1330d7&language=ru-RU&page=1&region=ru",
      options
    )
      .then((response) => response.json())
      .then((response) =>
        setData(
          response.results.map((elem: any) => {
            for (let i = 0; i < arr.length; i++) {
              if (elem.id == arr[i].id) {
                elem.video2 = "https://youtu.be/oxVNeAoZrsU";
                elem.genre = arr[i].name;
              }
            }
            return elem;
          })
        )
      )
      .catch((err) => console.error(err));
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=eb71330cfd1408b8d73993cb5f1330d7&language=ru-RU&page=1&region=ru",
      options
    )
      .then((response) => response.json())
      .then((response) =>
        setArray(
          response.results.map((elem: any) => {
            for (let i = 0; i < arr.length; i++) {
              if (elem.id == arr[i].id) {
                elem.video2 = "https://youtu.be/oxVNeAoZrsU";
                elem.genre = arr[i].name;
              }
            }
            return elem;
          })
        )
      )
      .catch((err) => console.error(err));
  }, []);
  const genres = (text: any) => {
    const filtered = array?.filter((i: any) => {
      if (i?.genre?.toLowerCase() === text.toLowerCase()) {
        return i;
      } else if (text === "Все") {
        return i;
      }
    });
    setData(filtered);
    setActive(text);
  };
  const slicedArr = data?.slice(0, 8);
  // console.log(slicedArr);
  return (
    <div style={{
      backgroundColor: 'rgba(29, 37, 56, 255)'
    }}>
      <div className="w-full mb-14" style={{
        backgroundColor: 'rgba(29, 37, 56, 255)'
      }}>
        <img
          src="/images/bg-joker.png"
          alt="joker"
          className="w-full absolute top-0 left-0"
        />
        <div className="w-[80%] m-auto relative">
          <div className="w-full mt-10 flex items-center justify-between select-none">
            <h1 className="text-6xl text-white">Сейчас в кино</h1>
            <img src="/images/Line.svg" alt="line" />
            <nav className="flex items-center gap-5">
              <Link
                href="#"
                style={{ color: active === "Все" ? "white" : "#666873" }}
                onClick={() => genres("Все")}
              >
                Все
              </Link>
              <Link
                href="#"
                className="text-[#666873] hover:text-white ease-in duration-200"
                style={{ color: active === "Боевик" ? "white" : "#666873" }}
                onClick={() => genres("Боевик")}
              >
                Боевики
              </Link>
              <Link
                href="#"
                className="text-[#666873] hover:text-white ease-in duration-200"
                style={{
                  color: active === "Приключения" ? "white" : "#666873",
                }}
                onClick={() => genres("Приключения")}
              >
                Приключения
              </Link>
              <Link
                href="#"
                className="text-[#666873] hover:text-white ease-in duration-200"
                style={{ color: active === "Комедии" ? "white" : "#666873" }}
                onClick={() => genres("Комедии")}
              >
                Комедии
              </Link>
              <Link
                href="#"
                className="text-[#666873] hover:text-white ease-in duration-200"
                style={{ color: active === "Фантастика" ? "white" : "#666873" }}
                onClick={() => genres("Фантастика")}
              >
                Фантастика
              </Link>
              <Link
                href="#"
                className="text-[#666873] hover:text-white ease-in duration-200"
                style={{ color: active === "Триллер" ? "white" : "#666873" }}
                onClick={() => genres("Триллер")}
              >
                Триллеры
              </Link>
              <Link
                href="#"
                className="text-[#666873] hover:text-white ease-in duration-200"
                style={{ color: active === "Драма" ? "white" : "#666873" }}
                onClick={() => genres("Драма")}
              >
                Драма
              </Link>
            </nav>
          </div>
          <div className="container m-auto flex gap-2 flex-wrap mt-10 relative">
            {show ? (
              data?.map((i: any, idx: JSX.Element) => (
                <DynamicItems key={idx} item={i} />
              ))
            ) : slicedArr ? (
              slicedArr?.map((i: any, idx: JSX.Element) => (
                <DynamicItems key={idx} item={i} />
              ))
            ) : (
              <div className="flex absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4">
                <div className="lds-ripple">
                  <div></div>
                  <div></div>
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-center mt-5 mb-14">
            {show ? null : slicedArr ? (
              <Button
                onClick={() => setShow(true)}
                variant="outlined"
                style={{
                  borderColor: "#ffff",
                  color: "#ffff",
                }}
              >
                Все новинки
              </Button>
            ) : null}
          </div>
          <Trailers arr2={arr2} />
          <PopularMovies />
          <News />
        </div>
      </div>
      <div className="w-full bg-[#151A26] pt-10 pb-10">
        <Releases />
      </div>
    </div>
  );
}
