import { useContext } from "react";
import { ThemeContext } from "./App";

function Button({ children }) {
  const { theme,setTheme } = useContext(ThemeContext);
  const className = 'button-' + theme;

  const handleClick = ()=>{
    alert("다크")
    setTheme('dark') 
  }

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button