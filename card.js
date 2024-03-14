const cardData = (title3,para2,img,img2,img3,img4,button2)=>{
    let div = document.createElement("div");
    div.innerHTML = `<ul class ="ul1git ">
    <img src="${img}" alt="">
    <h2>${title3}</h2>
    <p>${para2}</p>
    <button>${button2}</button></ul>
    <ul class ="ul2">
    <img src="${img2}" alt="">
    <h2>${title3}</h2>
    <p>${para2}</p>
    <button>${button2}</button></ul>
    <ul class ="ul3">
    <img src="${img3}" alt="">
    <h2>${title3}</h2>
    <p>${para2}</p>
    <button>${button2}</button></ul>
    <ul class ="ul4">
    <img src="${img4}" alt="">
    <h2>${title3}</h2>
    <p>${para2}</p>
    <button>${button2}</button></ul>`

    return div;
}
export{cardData};