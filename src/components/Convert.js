import React, { useState, useEffect } from "react";
import Axios from "axios";
const Convert = ({ text, language }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 2000);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const  translator = async () => {
      const response = await Axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(response.data.data.translations[0].translatedText);
    };
    translator();
  }, [language, debouncedText]);

  return (
    <div>
      <br />
      <ul>
        <li>Language Selected : {language.label}</li>
        <li>Lang Code : {language.value}</li>
      </ul>

      <h3 className="ui header">OUTPUT : </h3>
    
      <p style={{ marginLeft: "9rem" }}>{translated}</p>
    </div>
  );
};

export default Convert;
