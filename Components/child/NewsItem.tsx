import * as React from 'react';

export interface IAppProps {
}

export function NewsItem ({item, changeNews}: any) {
    const date = item.publishDateTime
    const sliceMonth = date.slice(5,7)
    const sliceDay = date.slice(8,10)
  return (
      <div className='w-[100%] rounded-lg h-[156px] bg-[yellow] relative' style={{
        backgroundImage: `url(${item.image.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
     }}
     onClick={() => changeNews(sliceMonth, sliceDay, item.image.url, item.head, item.body)}
     >
        <div className='absolute w-full h-full top-0 left-0 bg-black opacity-40'></div>
        <div className='w-[90%] h-[90%] m-auto flex flex-col justify-between relative z-100'>
            <p className='text-white'>
                {sliceDay}.{sliceMonth} 2023
                </p>
            <p className='text-white'>
        {item.head}
        </p>
        </div>
      </div>
  );
}
