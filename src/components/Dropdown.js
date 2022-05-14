import React, { useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, handleSelectChange ,dummy }) => {
  const [open, setOpen] = React.useState(false);
  const referDOM = useRef();
  useEffect(() => {
    const onBodyClick = (e) => {
      if (referDOM.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          handleSelectChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });
  return (
    <>
      <div ref={referDOM} className="ui form">
        <div className="field">
          <label className="label">{label}</label>

          <div
            onClick={() => {
              setOpen(!open);
            }}
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
      <div style={{marginBottom:"10px"}}>
       <br />
      <p style={{paddingLeft:"40rem ",color:`${selected.value}`}} >{dummy}</p>
     </div>
    </>
  );
};
export default Dropdown;
