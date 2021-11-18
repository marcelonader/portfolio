import "./style.scss";
import React,{useRef,useLayoutEffect} from "react";

const TitleTyping = ({arrMessages}) => {
  const titleElement = useRef();

  let currentCharacter = "";

  const typerText = (str, fn) => {
      const text = str.split('').reverse();
      const typer = setInterval(function() {
          return (!text.length) 
            ? (clearInterval(typer), setTimeout(fn, 500))
            : (currentCharacter += text.pop(), titleElement.current.innerHTML = currentCharacter)
      }, 150);
  }

  const clearText = fn => {
      currentCharacter = ""
      var n = titleElement.current.innerHTML.length;
      var typer = setInterval(()=>{ 
        return (n-- === 0) 
          ? (clearInterval(typer), fn()) 
          : titleElement.current.innerHTML = titleElement.current.innerHTML.slice(0, n);
      }, 50);
  }

  const executeTyper = arr => {
      let crr = -1;
    function prox(fn){
      crr < arr.length - 1 
        ? crr++ 
        : crr = 0;
      let str = arr[crr];
      typerText(str, function(){
        clearText(prox);
      });
    }
    prox(prox);
  }

  useLayoutEffect(()=>{
    executeTyper(arrMessages)
  })
  
  return (
    <p 
      ref={titleElement} 
      className='title-typing'
    ></p>
  )
}

export default TitleTyping;