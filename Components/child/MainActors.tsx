import * as React from 'react';



export function MainActors ({item}: any) {
  const img =  `https://image.tmdb.org/t/p/w500${item?.profile_path}`
  const [actorImg, setActorImg] = React.useState(img)
  // console.log(item);
  
  return (
    <div className='w-[100%] h-[300px]'>
        <div className='w-[248px] h-[250px] rounded-[10px]' style={{
          backgroundImage: `url(${actorImg === 'https://image.tmdb.org/t/p/w500null' ? '/images/profile.png' : actorImg})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}></div>
        <div>
          <h1 className='text-white text-xl'>{item.name}</h1>
          <h2 className='text-[#F2F60F]'>{item.character}</h2>
        </div>
    </div>
  );
}
