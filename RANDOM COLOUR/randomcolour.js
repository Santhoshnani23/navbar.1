 function getcolor()
{
    const randomno=Math.floor(Math.random()*16777215)
    const randomcode="#"+randomno.toString(16)
    document.body.style.backgroundColor=randomcode
    document.getElementById('colourcode').innerText=randomcode
  
}