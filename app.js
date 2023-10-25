const formElement =  document.querySelector('form');
const memeContainer = document.querySelector('#memecontainer');

memeContainer.addEventListener("click", function(e){  //delete button listener delegate
    if(e.target.tagName==="BUTTON"){
        e.target.parentElement.remove();
    }
})

formElement.addEventListener("submit", function(e){
    e.preventDefault();
    const ttext=document.querySelector("#ttext").value; //top text value
    const btext=document.querySelector("#btext").value; //bottom text value
    const pic=document.querySelector("#pic").value; //pic URL

    const newDiv = document.createElement("div");  //apend new div
    newDiv.classList.add('memeDiv');  
    newDiv.style.backgroundImage = `url("${pic}")`; 
    memeContainer.append(newDiv);  

    const topSpan = document.createElement("span"); //apend top text 
    topSpan.classList.add('top');
    topSpan.innerText=ttext;
    newDiv.append(topSpan);

    const btmSpan = document.createElement("span"); //apend bottom text
    btmSpan.classList.add('bottom');
    btmSpan.innerText=btext;
    newDiv.append(btmSpan);

    const delBtn = document.createElement("BUTTON") //create delete button
    delBtn.innerText=("TRASH LE ABOVE MEME");
    newDiv.append(delBtn);

    formElement.reset(); //clear form and reset to placeholders
})