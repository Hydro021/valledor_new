const infoData = (title,para,button)=>{
    let div = document.createElement("div");
    div.className='infodata'
    div.innerHTML = `<ul><h1>${title}</h1>
    <p class = "para">${para}</p>
    <button class = "btn">${button}</button></ul>`

    return div;
}
export{infoData};