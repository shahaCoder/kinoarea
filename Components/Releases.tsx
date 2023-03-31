import * as React from 'react';
import { Pagination } from 'swiper';
import { Swiper ,SwiperSlide } from 'swiper/react';
import { PopMovieItems } from './child/PopMovieItems';

export function Releases () {
    const [releases, setReleases]: any = React.useState()

    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      };
    React.useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=eb71330cfd1408b8d73993cb5f1330d7&language=ru-RU&page=1&region=ru', options)
          .then(res => res.json())
          .then(res => setReleases(res.results))
        }, [])
  return (
    <div className='w-[80%] m-auto'>
        <div className='w-full flex items-center justify-between mb-10'>
        <h1 className='text-white text-6xl'>Ожидаемые новинки</h1>
        <div className='flex items-center gap-4'>
           <p className='text-white'>1/5</p>
           <img src="/images/Arrow.svg" alt="arrow" />
        </div>
      </div>
      <div>
      <Swiper modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={4}
            >
      {
      releases?.map((i: any) => <SwiperSlide>
        <PopMovieItems key={i.id} item={i} />
    </SwiperSlide>
    )
      }
      </Swiper>
      </div>
    </div>
  );
}
