import { useNavigate } from "react-router-dom";
import {languages} from '../constants/languages'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const Navbar = () => {

  // can import from cookies as well if enabled - 'i18next'

  const currLangCode = localStorage.getItem('i18nextLng') || 'en';
  const navigate = useNavigate();

  useEffect(()=>{
    document.body.dir = currLangCode==='ar' ? 'rtl' : 'ltr';
  }, [currLangCode])

  const {i18n, t} = useTranslation();

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);

    const currentPath = window.location.pathname;
    //console.log(currentPath);
    const currentLangCode = currentPath.split('/')[1];

    const newPath = currentLangCode ? currentPath.replace(`/${currentLangCode}`, `/${lang_code}`) : `/${lang_code}`;
    
    navigate(newPath);
  };

  return (
    <div className="bg-slate-100 p-6 max-w-full">
      <nav className='flex justify-between gap-x-16'>
      <h1 className='text-2xl'>Stratup.ai</h1> 
      <div className='flex space-x-10 text-xl gap-x-8'>
        <button onClick={() => navigate(`${currLangCode}/`)}>{t('home')}</button>
        <button onClick={() => navigate(`${currLangCode}/about`)}>{t('about')}</button>
      </div>

      <select defaultValue={i18n.language} onChange={onChangeLang} className='bg-blue-300 rounded-md text-xl p4'>
        {languages.map(({ code, name }) => (
          <option key={code} value={code} disabled={code===currLangCode}>
            {name}
          </option>
        ))}
      </select>
      </nav>
    </div>
  )
}

export default Navbar