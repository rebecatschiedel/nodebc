const images = ['batmanwb.png', 'flashwb.png', 'supermanwb.png', 'wonder_womanwb.png'];

images.forEach(img => {
    const imagem = document.createElement('img');
    imagem.setAttribute('src', `./img/${img}`);

    const name = img.substring(0, (img.length - 6));
    imagem.onmouseover = () => imagem.setAttribute('src', `./img/${name}.png`);
    
    imagem.onmouseout = () => imagem.setAttribute('src', `./img/${img}`);

    imagem.onclick = () => alert(name.toUpperCase());
    
    document.body.appendChild(imagem);
})


