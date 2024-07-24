const images = [
    'src/assets/img/bg1.jpg',
    'src/assets/img/bg2.jpg',
    'src/assets/img/bg3.jpg'
  ];
  
  let currentIndex = 0;
  
  const changeBackground = () => {
    document.body.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
  };
  

  setInterval(changeBackground, 5000);
  

  changeBackground();
  