import { useTranslation } from 'react-i18next'

const Home = () => {
    const {t} = useTranslation();
    const number_of_days = 110;

  return (
    <div className='text-center mt-10'>
        <h1 className="text-7xl m-2 font-bold text-red-400 p-4">{t('welcome')}</h1>
        <h2 className="text-4xl font-bold text-blue-500 p-4">{t('message')}</h2>
        <p className="text-gray-700 text-2xl mt-6">{t('days_working', {number_of_days})}</p>
    </div>
  )
}

export default Home