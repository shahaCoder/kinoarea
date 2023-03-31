import Link from 'next/link';
import * as React from 'react';

// export interface IAppProps {
//     item: JSX.Element,
// }
export function PopMovieItems ({ item }: any) {
    const img =  'https://image.tmdb.org/t/p/w500/'
    const fixed = item?.vote_average.toFixed(1)
    const clr = fixed > 5 && fixed < 7 ? '#89CB36' : fixed < 5 ? '#CB3F36' : '#4BCB36'
  return (
    <Link href={`/movie/${item.id}`} className="w-[100%]">
         <div className='w-[100%] h-[450px] rounded-lg  ease-in duration-200' >
       <div className='w-full h-[85%] bg-no-repeat  bg-cover relative'
       style={{
         backgroundImage: `url(${img}${item?.poster_path})`
      }}>
           <button className='w-[60px] h-[30px] rounded-md absolute top-2 right-2'
           style={{
            backgroundColor: clr
           }}>
            {fixed < 1 ? '---' : fixed}</button>
       </div>
       <div>
        <h1 className='text-white'>{item?.title}</h1>
        <p className='text-[#F2F60F] capitalize'>{item?.genre}</p>
       </div>
         </div>
    </Link>
  );
}
