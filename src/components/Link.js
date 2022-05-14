const Link = (props) => {
  const { className, href, children } = props;
    
  function handleClick(event){
      if(event.ctrlKey || event.metaKey){
          return;
      }
        event.preventDefault();
        window.history.pushState({},"",href);
        const navigationEvent = new PopStateEvent('popState');
        window.dispatchEvent(navigationEvent);  
    }
  return (
    <a className={className} href={href} onClick={handleClick} >
      {children}
    </a>
  );
};
export default Link;
