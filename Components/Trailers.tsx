import * as React from 'react';
import { AiFillDislike, AiFillLike } from 'react-icons/ai'
import { TrailersItem } from './child/TrailersItem';
// export interface IAppProps {
// }



export function Trailers ({arr2}: any) {
    const [color, setColor] = React.useState(false)
    const [color2, setColor2] = React.useState(false)
    const [count, setCount]: any = React.useState(603)
    const [dislike, setDislike]: any = React.useState(3)
    const [vid, setVid]: any = React.useState()
    const [name, setName]: any = React.useState()
    const clr = color ? 'yellow' : 'white'
    const clr2 = color2 ? 'yellow' : 'white'
    const handleChangeLike = () => {
        setColor(!color),setColor2(false)
        if(clr2 === 'yellow'){
            setDislike(dislike - 1)
        }
        if(clr === 'yellow'){
            setCount(count - 1)
        } else {
            setCount(count + 1)
        }
    }
    const handleChangeDisLike = () => {
            setColor2(!color2),setColor(false)
            if(clr === 'yellow'){
                setCount(count - 1)
            }
            if(clr2 === 'yellow'){
                setDislike(dislike - 1)
            } else {
            setDislike(dislike + 1)
        }
    }
    const changeVideo = (vid: JSX.Element,name: JSX.Element, likes: JSX.Element, dislikes: JSX.Element, liked: any) => {
        setVid(vid),setName(name),setCount(likes),setDislike(dislikes),setColor(liked)
    }
  return (
    <div className='w-[100%] m-auto select-none'>
      <div className='w-full flex items-center justify-between'>
        <h1 className='text-white text-6xl'>Новые трейлеры</h1>
        <div className='flex items-center gap-4'>
           <p className='text-white'>Все трейлеры </p>
           <img src="/images/Arrow.svg" alt="arrow" />
        </div>
      </div>
      <iframe width="100%" height="600" src={vid ? vid : 'https://www.youtube.com/embed/Xpg1EwKgzfM'} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='mt-5'></iframe>
      <div className='mt-5 flex items-center justify-between'>
        <div>
            <h1 className='text-white text-4xl'>{name ? name : 'Джон Уик 4'}</h1>
        </div>
        <div className='flex items-center gap-4'>
            <div className='flex items-center flex-col'>
            <AiFillLike size={30} color={clr}  onClick={() => handleChangeLike()} />
            <p className='text-white'>{count ? count : arr2[0].likes}</p>
            </div>
            <div className='flex items-center flex-col'>
            <AiFillDislike size={30} color={clr2} onClick={() => handleChangeDisLike()}/>
            <p className='text-white'>{dislike ? dislike : arr2[0].dislikes}</p>
            </div>
        </div>
      </div>
      <div className='w-full h-fit flex items-center gap-3 mt-10'>
           {
            arr2.map((item: any) => <TrailersItem key={item.id} i={item} changeVideo={changeVideo} />)
           }
      </div>
    </div>
  );
}
