import { Inter } from '@next/font/google'
import { url } from 'inspector'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Footer({}) {
  return (
    <div className='w-full h-screen bg-[#151A26] pt-20'>
      <div className='w-[80%] h-[480px] m-auto relative mb-20' style={{
        backgroundImage: 'url(/images/footerImg.png)',
      }}>
        <div className='absolute w-full h-full top-0 left-0' style={{
          background: 'rgba(29, 58, 160, 0.9)'
        }}>
          <div className='flex justify-center absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
          <div className='flex flex-col'>
          <div className='flex items-center justify-center mb-10'>
            <img src="/images/Logo.svg" alt="logo" />
          </div>
          <div className='flex flex-col'>
            <h1 className='text-center text-5xl text-white mb-2'>Подпишитесь на E-mail рассылку</h1>
            <p className='text-center text-white mb-4'>Если хотиет быть в курсе последних новостей и новинок кино - <br />
             <span className='text-center'>заполните форму ниже и оформите бесплатную E-mail рассылку! </span>
            </p>
            <form>
              <div className='flex gap-3 justify-center'>
              <input type="text" className='w-[300px] h-[50px] rounded-lg pl-6' placeholder='Введите свой E-mail адрес' />
              <button type="button" className="focus:outline-none bg-[#F2F60F] hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-6 py-4 mr-2 mb-2 dark:focus:ring-yellow-900">Подписаться</button>
              </div>
            </form>
            <div className='flex items-center gap-3 justify-center'>
              <input type="checkbox" id='check' />
              <label htmlFor="check" className='text-white'>
              Соглашаюсь на условия <span className='text-[#F2F60F]'>политики конфиденциальности</span>
              </label>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
      <div>
          <div className='flex items-center gap-8 justify-center text-white mb-10'>
            <p>Афиша</p>
            <p>Новости</p>
            <p>Персоны</p>
            <p>Рейтинги</p>
            <p>Рецензии</p>
            <p>Каталог фильмов</p>
          </div>
               <p className='text-center mb-6' style={{
                color: 'rgba(227, 230, 240, 0.72)'
               }}>2020 © Kinoarea.  Все права защищены</p>
               <p className='text-center underline' style={{
                color: 'rgba(227, 230, 240, 0.72)'
               }}>Политика конфиденциальности</p>
      </div>
    </div>
  )
}