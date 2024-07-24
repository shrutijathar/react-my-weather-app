
// import {imgUrl} from './constants';
// const images = [
//     `${imgUrl}bg1.jpg`,
//     `${imgUrl}bg2.jpg`,
//     `${imgUrl}bg3.jpg`
//   ];
  
//   let currentIndex = 0;
  
//   const changeBackground = () => {
//     document.body.style.backgroundImage = `url(${images[currentIndex]})`;
//     currentIndex = (currentIndex + 1) % images.length;
//   };
  

//   setInterval(changeBackground, 5000);
  

//   changeBackground();
import { imgUrl } from './constants';
document.body.style.backgroundImage = `url(${imgUrl}bg.jpg)`;