import React from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Russian",
    value: "ru",
  },
  {
    label: "Spanish",

    value: "es",
  },
  {
    label: "Italian",

    value: "it",
  },
  {
    label: "Portuguese",
    value: "pt",
  },
  {
    label: "French",
    value: "fr",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Telugu",
    value: "te",
  },
  {
    label: "Urdu",
    value: "ur",
  },
  {
    label: "Tamil",
    value: "ta",
  },
  {
    label: "Bengali",
    value: "bn",
  },
];
const Translate = () => {
  const [language, setLanguage] = React.useState(options[1]);
  const [text, setText] = React.useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <h3>Enter Text Below</h3>

          <input
          className="input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <hr />
      <Dropdown
        label={<h3>Select a Language</h3>}
        options={options}
        selected={language}
        handleSelectChange={setLanguage}
      />
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
