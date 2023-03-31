import Link from 'next/link';
import * as React from 'react';
import { PopMovieItems } from './child/PopMovieItems';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay,Parallax } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function PopularMovies () {
    const [active, setActive]: any = React.useState('all')
    const [popular, setPopular]: any = React.useState()
    const [array, setArray]: any = React.useState()
    const genres = (text: any) => {
      const filtered = array?.filter((i: any) => {
        const sliced = i.release_date.slice(0, 4)
        if(+sliced == text){
          return i
        }
        else if(text === 'all'){
          return i
        }
      })
      setPopular(filtered)
      setActive(text)
    }
      const prev = '/images/Arrow3.svg'
      const pagination: any = {
        clickable: true,
        type: "fraction",
        renderBullet: function (index: any, className: any) {
            return '<span class="' + className + '">' + (prev[index]) + "</span>";
          },
      }
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      };
      React.useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=eb71330cfd1408b8d73993cb5f1330d7&language=ru-RU&page=1&region=ru', options)
          .then(res => res.json())
          .then(res => setPopular(res.results))
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=eb71330cfd1408b8d73993cb5f1330d7&language=ru-RU&page=1&region=ru', options)
          .then(res => res.json())
          .then(res => setArray(res.results))
      }, [])
      
  return (
    <div>
        <div className='w-full mt-10 flex items-center justify-between select-none mb-10'>
            <h1 className='text-6xl text-white'>Популярные фильмы</h1>
            <img src="/images/Line.svg" alt="line" />
            <nav className='flex items-center gap-5'>
              <p style={{color: active === 'all' ? 'white' : '#666873'}}
                onClick={() => genres('all')}>Всё время</p>
              <p className='text-[#666873]  hover:text-white ease-in duration-200' 
              style={{color: active === '2023' ? 'white' : '#666873'}}
              onClick={() => genres('2023')}>2023</p>
              <p className='text-[#666873] hover:text-white ease-in duration-200' style={{color: active === '2022' ? 'white' : '#666873'}} onClick={() => genres('2022')}>2022</p>
              <p className='text-[#666873] hover:text-white ease-in duration-200'
              style={{color: active === '2021' ? 'white' : '#666873'}} onClick={() => genres('2021')}>2021</p>
            </nav>
            </div>
            <Swiper modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={pagination}
    >
      {
      popular?.map((i: any) => <SwiperSlide>
        <PopMovieItems key={i.id} item={i} />
    </SwiperSlide>
    )
      }
      </Swiper>
    </div>
  );
}
