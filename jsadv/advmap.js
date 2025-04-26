let showMap = () => {
    let elem = document.querySelector('div')
    let chip =map[y][x];
    elem.innerHTML ='<img src="adv_img/' + images[chip] + '.png"><img scr="adv_img/man.png">';
};

showMap();