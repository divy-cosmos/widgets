import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);


  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const activeAccordion = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${activeAccordion}`}
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>

        <div className={`content ${activeAccordion} `}>
          <p>{item.description}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <React.Fragment>
      <div className="ui styled accordion">{renderedItems}</div>
    </React.Fragment>
  );
};
export default Accordion;
