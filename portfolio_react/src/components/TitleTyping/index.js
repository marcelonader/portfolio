import "./style.css";
import React,{useRef,useLayoutEffect} from "react";

function TitleTyping ({arrMessages}){
  const titleElement = useRef();

  // let messageIndex = 0;
  // let characterIndex = 0;
  // let currentMessage = "";
  let currentCharacter = "";

  var div =  titleElement.current;

function escrever(str, done) {
    var char = str.split('').reverse();
    var typer = setInterval(function() {
        if (!char.length) {
            clearInterval(typer);
            return setTimeout(done, 500); // só para esperar um bocadinho
        }

        currentCharacter += char.pop();
        div.innerHTML = currentCharacter
    }, 150);
}

function limpar(done) {
    currentCharacter = ""
    var char = div.innerHTML;
    var nr = char.length;
    var typer = setInterval(function() {
        if (nr-- === 0) {
            clearInterval(typer);
            return done();
        }
        div.innerHTML = char.slice(0, nr);
    }, 50);
}

function rodape(conteudos, el) {
    var atual = -1;
	function prox(cb){
		if (atual < conteudos.length - 1) atual++;
		else atual = 0;
		var str = conteudos[atual];
		escrever(str, function(){
			limpar(prox);
		});
	}
	prox(prox);
}
  // function timeout(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }
  // const type = async () => {

  //   if(messageIndex === arrMessages.length){
  //     messageIndex = 0
  //     // await timeout(1000)
  //   };
  //   currentMessage = arrMessages[messageIndex];
  //   currentCharacter = currentMessage.slice(0, characterIndex++);

  //   titleElement.current.innerHTML=currentCharacter;

  //   if(currentCharacter.length === currentMessage.length){

  //     let char = titleElement.current.innerHTML;
  //     let nr = char.length;
  //     let typer = await setInterval(()=>{
  //       if(nr-- === 0){
  //         clearInterval(typer)
  //       }
  //       titleElement.current.innerHTML = char.slice(0, nr)
  //     }, 200)
  //     await timeout(1000)

  //     messageIndex++;

  //     characterIndex=0;
      
  //   }
    

    


  useLayoutEffect(()=>{
    // setInterval(type, 150)
    rodape(arrMessages)
  })
  
  return (
    <p 
      ref={titleElement} 
      className='title-typing'
    >
    </p>
  )
}

export default TitleTyping;