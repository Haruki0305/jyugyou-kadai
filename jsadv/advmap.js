let showmap = () => {
    let elem = document.querySelector('div')
    let chip =map[y][x];
    elem.innerHTML ='<img scr="adv_img/' + imges[chip] + '.pmg"><img scr="adv_img/man.png">';
};

showmap();