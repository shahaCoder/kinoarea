import * as React from "react";
import { NewsItem } from "./child/NewsItem";

export interface IAppProps {}

export function News() {
  const [news, setNews]: any = React.useState();
  const [dates, setDates]: any = React.useState();
  const [img, setImg]: any = React.useState();
  const [dates2, setDates2]: any = React.useState();
  const [title, setTitle]: any = React.useState();
  const [info, setInfo]: any = React.useState();
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d51a427b6fmsh6a4edba68531ff6p176960jsnc07c69d27ae8",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };
  React.useEffect(() => {
    fetch(
      "https://imdb8.p.rapidapi.com/title/get-news?tconst=tt0944947&limit=25",
      options
    )
      .then((response) => response.json())
      .then((response) => setNews(response.items))
      .catch((err) => console.error(err));
  }, []);
  const sliced = news?.slice(0, 4);
  const date = sliced === undefined ? null : sliced[0].publishDateTime;
  const sliceMonth = date === null ? null : date.slice(5, 7);
  const sliceDay = date === null ? null : date.slice(8, 10);
  const changeNews = (
    date: JSX.Element,
    date2: JSX.Element,
    image: JSX.Element,
    title: JSX.Element,
    info: JSX.Element
  ) => {
    setDates(date);
    setDates2(date2);
    setImg(image);
    setTitle(title);
    setInfo(info);
  };
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-white text-6xl">Последние новости</h1>
        <div className="flex items-center gap-4">
          <p className="text-white">Все новости</p>
          <img src="/images/Arrow.svg" alt="arrow" />
        </div>
      </div>
      <div className="w-full flex gap-2 mt-10">
        <div
          className="w-[75%] h-[650px] rounded-lg pt-10 pb-10 relative"
          style={{
            backgroundImage: `url(${
              img ? img : sliced === undefined ? null : sliced[0]?.image.url
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40"></div>
          <div className="w-[90%] h-[100%] m-auto flex flex-col justify-between relative z-100">
            <p className="text-white">
              {dates
                ? dates + "." + dates2 + "." + "2023"
                : sliceDay + "." + sliceMonth + "." + "2023"}
            </p>
            <div>
              <p className="text-white text-3xl mb-3">
                {title ? title : sliced === undefined ? null : sliced[0]?.head}
              </p>
              <p className="text-white">
                {info ? info : sliced === undefined ? null : sliced[0]?.body}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[23%] flex items-center flex-col gap-2">
          {sliced?.map((i: any) => (
            <NewsItem key={i.id} item={i} changeNews={changeNews} />
          ))}
        </div>
      </div>
    </div>
  );
}
