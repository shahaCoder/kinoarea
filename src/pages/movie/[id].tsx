import { GetServerSideProps } from "next";
import * as React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Chart, Doughnut } from "react-chartjs-2";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { MainActors } from "Components/child/MainActors";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from "swiper";
import { PopMovieItems } from "Components/child/PopMovieItems";

ChartJS.register(ArcElement, Tooltip, Legend);
export interface IAppProps {
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const router = query.id;
  console.log(router);
  
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${router}?api_key=eb71330cfd1408b8d73993cb5f1330d7&language=ru-RU&page=1&region=ru`
  );
  const res2 = await fetch(
    `https://api.themoviedb.org/3/movie/${router}/credits?api_key=eb71330cfd1408b8d73993cb5f1330d7&language=ru-RU`,
  )
  const res3 = await fetch(
    `https://api.themoviedb.org/3/movie/${router}/videos?api_key=eb71330cfd1408b8d73993cb5f1330d7&language=en-US`,
  )
  const res4 = await fetch(
    `https://api.themoviedb.org/3/movie/${router}/recommendations?api_key=eb71330cfd1408b8d73993cb5f1330d7&language=en-US&page=1`
  )
  const data = await res.json();
  const  crew = await res2.json();
  const  video = await res3.json();
  const siquels = await res4.json()
  return {
    props: {
       data: data,
       crew: crew,
       video: video,
       siquels: siquels
     },
  };
};
const options = {
  cutoutPercentage: 88,
  animation: {
    animationRotate: true,
    duration: 2000,
  },
  legend: {
    display: false,
  },
  tooltips: {
    enabled: false,
  },
};
const prev = '/images/Arrow3.svg'
const pagination: any = {
  clickable: true,
  type: "fraction",
  renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + (prev[index]) + "</span>";
    },
}
export default function Details({ data, crew, video, siquels }: any) {
  const [movieData, setMovieData]: any = React.useState();
  const [date, setDate]: any = React.useState()
  const [country, setCountry]: any = React.useState()
  const [tagline, setTagline]: any = React.useState()
  const [budget, setBudget]: any = React.useState()
  const [time, setTime]: any = React.useState()
  const [language, setLanguage]: any = React.useState()
  const [genre, setGenre]: any = React.useState()
  const [revenue, setRevenue]: any = React.useState()
  const [actors, setActors]: any = React.useState()
  const [movieImages, setMovieImages]: any = React.useState()
  const [compozitor, setCompozitor]: any = React.useState()
  const [producer, setProducer]: any = React.useState()
  const [video2, setVideo2]: any = React.useState()
  console.log(data);
  
  React.useEffect(() => {
    setMovieData(data);
    setDate(data?.release_date)
    setCountry(data?.production_countries[0]?.name)
    setTagline(data?.tagline)
    setBudget(data?.budget)
    setTime(data?.runtime)
    setLanguage(data?.original_language)
    setGenre(data?.genres[0].name)
    setRevenue(data?.revenue)
    setActors(crew.cast)
    setMovieImages(siquels.results)
    setCompozitor(crew)
    video?.results?.filter((element: any) => {
      if(element.type === 'Trailer'){
        setVideo2(element.key)
      }
    })
    crew?.crew[0]?.job == 'Producer' ? setProducer(crew?.crew[0]?.name) : null
    crew?.crew[1]?.job == 'Producer' ? setProducer(crew?.crew[1]?.name) : null
    crew?.crew[2]?.job == 'Producer' ? setProducer(crew?.crew[2]?.name) : null
    crew?.crew[3]?.job == 'Producer' ? setProducer(crew?.crew[3]?.name) : null
  }, []);
  const tenActors = actors?.slice(0, 8)
  const release = date?.slice(0,4)
  const raiting = movieData?.vote_average.toFixed(1);
  const waiting = movieData?.vote_average.toFixed(0);
  const data2 = {
    value: 30,
    datasets: [
      {
        data: [raiting, 10 - raiting],
        backgroundColor: [
          raiting < 5 ? "red" : "rgba(137, 203, 54, 1)",
          "rgba(137, 203, 54, 0.3)",
        ],
        borderColor: "transparent",
        hoverOffset: 2,
      },
    ],
  };
  const img = "https://image.tmdb.org/t/p/w500/";
  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart: any, args: any, pluginOptions: any) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = "bolder 18px sans-serif";
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.fillText(
        `${data.datasets[0].data[0]}`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };
  return (
    <>
      <title>{movieData?.title}</title>
    <div className="w-[100%]">
      <div
        className="w-full h-[600px] absolute top-0">
        </div>
      <div className="w-[80%] m-auto relative z-10">
        <div className="m-[50px] flex items-center gap-8">
          <div
            className="w-[30%] h-[450px]"
            style={{
              backgroundImage: `url(${img}${movieData?.poster_path})`,
              backgroundPosition: "top",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="w-[55%]">
            <h1 className="text-white text-4xl mb-2">{movieData?.title}</h1>
            <p className="text-white mb-2">{movieData?.original_title}</p>
            <div className="w-[75px] h-[75px] mb-8 flex flex-col items-center gap-1">
              <div className="w-[75px] h-[75px]">
                <Doughnut
                  data={data2}
                  options={options}
                  plugins={[textCenter]}
                ></Doughnut>
              </div>
              <p className="text-white">IMDB</p>
            </div>
            <p className="text-white mb-5">{movieData?.overview}</p>
            <a href="#trailer">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="relative px-5 py-2.5 transition-all flex gap-2 ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <img
                  src="/images/playTrailer.svg"
                  alt="play"
                  className="w-[16px]"
                />
                Смотреть трейлер
              </span>
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full absolute top-0 opacity-60">
        <img className="w-full h-screen object-cover " src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieData?.backdrop_path}`} alt="" />
        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-[#1e2538] to-transparent"></div>
      </div>
    <div className="w-[100% h-auto pb-10 relative">
      <div className="w-[80%] m-auto">
    <div className="m-[50px] flex gap-2 items-center">
      <button className='w-[55px] h-[55px] rounded-sm bg-[#1B2133]'>
      <div className="flex justify-center">
      <AiFillLike size={30} color={'white'} />
      </div>
      </button>
      <button className='w-[55px] h-[55px] rounded-sm bg-[#1B2133]'>
      <div className="flex justify-center">
      <AiFillDislike size={30} color={'white'} />
      </div>
      </button>
      <button className="w-[185px] h-[59px] rounded-md bg-[#1B2133] relative">
        <div className="h-[59px] bg-[#2E6125] rounded-md absolute top-0" style={{
          width: `${waiting + 0}%`
        }}>
        </div>
          <p className="text-[#57D043] relative z-1">Рейтинг ожидания { waiting + 0}%</p> 
      </button>
      <button className='w-[55px] h-[55px] rounded-sm bg-[#1B2133]'>
      <div className="flex justify-center">
      <FaHeart size={30} color={'white'} />
      </div>
      </button>
    </div>
        <div className="w-[100%] m-[50px] flex items-center justify-between">
        <div className="w-[50%] text-2xl">
          <div className="w-[90%] flex items-center justify-between">
            <p className="text-white">Год: </p>
            <p className='text-[#F2F60F]'>{ release }</p>
          </div>
          <div className="w-[90%] flex items-center justify-between">
            <p className="text-white">Страна: </p>
            <p className='text-[#F2F60F]'>{ country }</p>
          </div>
          <div className="w-[90%] flex items-center justify-between">
            <p className=" text-white">Слоган: </p>
            <p className=' text-[#F2F60F] truncate' >{
               tagline === '«На предельной высоте свои законы выживания»' ? '«На предельной высоте...»' : tagline ? tagline : '---'
            }</p>
          </div>
          <div className="w-[90%] flex items-center justify-between">
            <p className="text-white">Жанр: </p>
            <p className='text-[#F2F60F] capitalize' >{ genre }</p>
          </div>
          <div className="w-[90%] flex items-center justify-between">
            <p className="text-white">Доход: </p>
            <p className='text-[#F2F60F] capitalize' >{ revenue }$</p>
          </div>
        </div>
        <div className="w-[50%] text-2xl">
          <div className="w-[90%] flex items-center justify-between">
            <p className="text-white">Продюсер: </p>
            <p className='text-[#F2F60F] capitalize' >{ producer }</p>
          </div>
          <div className="w-[90%] flex items-center justify-between">
            <p className="text-white">Бюджет: </p>
            <p className="text-[#F2F60F]">{
              budget != 0 ? `${budget}$` : '---'
            }</p>
          </div>
          <div className="w-[90%] flex items-center justify-between">
            <p className="text-white">Премьера: </p>
            <p className="text-[#F2F60F]">{ date }</p>
          </div>
          <div className="w-[90%] flex items-center justify-between">
            <p className="text-white">Время: </p>
            <p className="text-[#F2F60F]">{ time } min</p>
          </div>
          <div className="w-[90%] flex items-center justify-between">
            <p className="text-white">Язык: </p>
            <p className="text-[#F2F60F] capitalize">{ language }</p>
          </div>
        </div>
        </div>
      </div>
      <div className="w-[83%] m-auto flex mb-10">
        <div className="w-full flex items-center justify-between">
        <h1 className="text-white text-6xl">В главных ролях:</h1>
        <div className="flex items-center gap-4">
          <p className="text-white">Все актёры</p>
          <img src="/images/Arrow.svg" alt="arrow" />
        </div>
      </div>
        </div>
        <div className="w-[83%] m-auto grid grid-cols-4 gap-[40px] mb-10">
          {
            tenActors?.map((i: any) => <MainActors item={i} />)
          }
        </div>
        <div className="w-[83%] m-auto flex mb-10">
        <div className="w-full flex items-center justify-between">
        <h1 className="text-white text-6xl" id="trailer">Трейлер фильма</h1>
      </div>
        </div>
        <div className="w-[100%] flex justify-center mb-10">
        <iframe className="w-[83%]" height="600" src={`https://www.youtube.com/embed/${video2}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className="w-[83%] m-auto mb-10">
          <h1 className="text-center text-white text-6xl mb-10">Сиквелы и приквелы</h1>
          <Swiper modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={4}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            pagination={pagination}
    >
      {
      movieImages?.map((i: any) => <SwiperSlide>
        <PopMovieItems key={i.id} item={i} />
    </SwiperSlide>
    )
      }
    </Swiper>
        </div>
    </div>
    </>
  );
}
