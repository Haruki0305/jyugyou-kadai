let showMap = () => {
    let elem = document.querySelector('div')
    let chip =map[y][x];
    elem.innerHTML ='<img src="dav_img/' + images[chip] + '.png"><img scr="adv_img/man.png'
};

showMap();

document.addEventListener('keyup',(event) => {
    let keyname = event.key;
    console.log(keyname);
 } );