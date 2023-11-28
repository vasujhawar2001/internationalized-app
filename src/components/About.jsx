import React from 'react'
import { useTranslation } from 'react-i18next'

const About = () => {
  const {t} = useTranslation();

  return (
    <div className='text-center mt-10'>
      <h2 className='text-2xl font-semibold text-violet-400 underline'>{t("dynamic")}</h2>
      <h3>APP BREAKING!!!!!!!</h3>
    </div>
  )
}

export default About