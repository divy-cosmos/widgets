import React, { useState, useEffect } from "react";
import Axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("Elon Musk");
  const [results, setResults] = useState([]);
  const [debouncedTerm, setdebouncedTerm] = useState(term);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setdebouncedTerm(term);
    }, 2000);
    return () => {
      clearTimeout(timerID);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await Axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };

    search();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">{<h3>Search</h3>}</label>
          <input
            className="input"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        <div className="ui celled list">{renderedResults}</div>
      </div>
    </React.Fragment>
  );
};

export default Search;
