import { imgData } from "./img.js";
import { infoData } from "./info.js";
import { cardData } from "./card.js";

const sectionOne = {
    title:"Avatar: The Last Airbender",
    para:"Avatar: The Last Airbender is an animated series that follows the adventures of Aang, the young Avatar who can bend all four elements. Aang and his friends Katara, Sokka, and Toph travel across the world to stop the Fire Nation from conquering the other nations and destroying the balance of the world. Along the way, they face many enemies and challenges, including the banished Fire Nation prince Zuko, who is obsessed with capturing Aang.",
    image:"title.jpg",
    button:"Learn More"
}
const sectionTwo ={
    title2:"Aang",
    title3:"aang",
    para2:"hi",
    image2:"1.png",
    image3:"2.png",
    image4:"3.png",
    iamge5:"4.png",
    button:"Learn More"
}

const{title,para,image,button} = sectionOne;
const{title3,para2,image2,button2} = sectionTwo;

const container = document.getElementById("section one");
const container2 = document.getElementById("section two");


container.append(imgData(image));
container.append(infoData(title,para,button));
container2.append(cardData(title3,para2,image2,button2));

