import { NavLink } from "react-router-dom";
import {languages} from '../constants/languages'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import cookies from 'js-cookie';


const isActive = ({ isActive }) => `link ${isActive ? "active" : ""}`;

const Navbar = () => {

  const currentLanguageCode = cookies.get('i18next') || 'en';

  //console.log(document.body.dir);

  useEffect(()=>{
    document.body.dir = currentLanguageCode==='ar' ? 'rtl' : 'ltr';
  }, [currentLanguageCode])

  const {i18n, t} = useTranslation();

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <div className="bg-slate-100 p-6 max-w-full">
      <nav className='flex justify-between gap-x-16'>
      <h1 className='text-2xl'>Stratup.ai</h1> 
      <div className='flex space-x-10 text-xl gap-x-8'>
        <NavLink className={isActive} to="/">
          <p>{t("home")}</p>
        </NavLink>
        <NavLink className={isActive} to="/about">
          <p>{t("about")}</p>
        </NavLink>
      </div>

      <select defaultValue={i18n.language} onChange={onChangeLang} className='bg-blue-300 rounded-md text-xl p4'>
        {languages.map(({ code, name }) => (
          <option key={code} value={code} disabled={code===currentLanguageCode}>
            {name}
          </option>
        ))}
      </select>
      </nav>
    </div>
  )
}

export default Navbar