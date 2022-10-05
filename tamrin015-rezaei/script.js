document.querySelector('button').addEventListener('click',()=>{
    const randomBlue = Math.floor(Math.random()*255);
    const randomGreen = Math.floor(Math.random()*255);
    const randomRed = Math.floor(Math.random()*255);

   document.body.style.background = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
})



document.addEventListener('keydown',(e)=>{
    const box = document.querySelector('.box')
    let step = 10;
    switch(e.code){
        case "ArrowRight" : box.style.left = (parseInt(box.style.left) || 0) + step + "px";
        break;
        case "ArrowLeft" : box.style.left = (parseInt(box.style.left) || 0) - step + "px";
        break;
        case "ArrowUp" : box.style.top = (parseInt(box.style.top) || 0) - step + "px";
        break;
        case "ArrowDown" : box.style.top = (parseInt(box.style.top) || 0) + step + "px";
        break;
    }
})





const input = document.querySelector('input');
const ol = document.querySelector('ol');
input.addEventListener('change',()=>{
  const li =   document.createElement('li');
  li.innerText = input.value
  ol.appendChild(li)
  input.value = ''
})