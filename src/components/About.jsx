import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const translateText = async (text, targetLanguage) => {
  try {
    const response = await fetch('http://localhost:3001/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        targetLanguage,
      }),
    });

    if (!response.ok) {
      throw new Error('Translation request failed');
    }

    const result = await response.json();
    return result.translation;
  } catch (error) {
    console.error(`Error in translateText: ${error}`);
    return null;
  }
};

const About = () => {
  
  const {i18n, t} = useTranslation();
  const randomQuote = "hello there, this is arandom generated quote!"; 
  const [translatedText, setTranslatedText] = useState(randomQuote);

  const handleClick = async () => {
    
    const translatedQuote = await translateText(randomQuote, 'fr');
    console.log(translatedQuote);
    setTranslatedText(translatedQuote);
  };

  return (
    <div className='text-center mt-10'>
      <h2 className='text-2xl font-semibold text-violet-400 underline'>{t("dynamic")}</h2>
      <button onClick={handleClick}>TRANSLATE HERE</button>
      <h3 className='text-5xl'>{translatedText}</h3>
    </div>
  )
}

export default About