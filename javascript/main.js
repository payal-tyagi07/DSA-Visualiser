const container=document.getElementById("array-container");
const generateBtn=document.getElementById("generate");
const algoSelect=document.getElementById("algo-select");

let array=[];
let size=30;
let speed=50;

function generateArray(){
    array=[];
    container.innerHTML="";

    for(let i=0;i<size;i++)
    {
        const value=Math.floor(Math.random()*300)+10;
        array.push(value);

        const bar=document.createElement("div");
        bar.classList.add("bar");
        bar.style.height`${value}px`;

        container.appendChild(bar);
    }
}

generateBtn.addEventListener("click",generateArray);

//Delay function (for animation)
function sleep(ms)
{
    return new Promise(resolve=>setTimeout(resolve,ms));
}



