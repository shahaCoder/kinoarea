import * as React from 'react';
// export interface IAppProps {
// }
export function TrailersItem ({i, changeVideo}: any) {
  const [active, setActive] = React.useState(false)
  const [info, setInfo] = React.useState()
  const activeFunc = (y: any) => {
    setInfo(y.id)
    setActive(true)
  }
  return (
    <div className={`act w-[25%] h-[300px] hover:bg-[#3657CB] rounded-xl ${active && info === i.id ? 'activeBlock' : null}`} onClick={() => activeFunc(i)}>
        <div className={`w-full h-full hover:opacity-60 rounded-xl bg-no-repeat bg-cover bg-center relative ${active ? 'activeImg' : null}`}
        onClick={() => changeVideo(i.movieTrailer, i.movieName, i.likes, i.dislikes, i.liked)}
        style={{
            backgroundImage: `url(${i.moviePoster})`
         }}
        >
          <img src="/images/play.svg" alt="play" className='w-[30px] absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4' />
        </div>
        <h1 className='text-white'>{i.movieName}</h1>
    </div>
  );
}