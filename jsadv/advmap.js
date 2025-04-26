let showMap = () => {
    let elem = document.querySelector('div')
    let chip =map[y][x];
    elem.innerHTML ='<img src="dav_img/' + images[chip] + '.png"><img scr="adv_img/man.png'
};

showMap();

document.addEventListener('keyup',(event) => {
    let keyname = event.key;
    console.log(keyname);    
    if(keyname == 'ArrowRight'){
        x -= 1;
    } else if(keyname == 'ArrowRight'){
        x += 1;
    } else if(keyname == 'ArrowUp'){
        y -= 1;
    }else if(keyname == 'ArrowDown'){
        y += 1;
    }
    showMap()
} );
