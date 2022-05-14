import React from "react";

const { useEffect, useState } = React;

const Route = (props) => {

    const [currentPath,setCurrentPath]=useState(window.location.pathname);

  useEffect(() => {
    const handleLocation = () => {
    //   console.log("location changed");
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popState", handleLocation);

    return () => {
      window.removeEventListener("popState", handleLocation);
    //   console.log('removed router');
    };
  }, []);
  
  // no need to import React from 'react' if we are not returning any jsx
  return currentPath === props.path ? props.children : null;
};
export default Route;
