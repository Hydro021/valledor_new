const imgData = (image)=>{
    let div = document.createElement("div");
    div.innerHTML = `<img class = "m" src="${image}" alt="">`

    return div;
}
export{imgData};