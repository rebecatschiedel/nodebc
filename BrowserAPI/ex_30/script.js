let ul = document.querySelector('ul');


for (i = ul.children.length - 1; i >= 0 ; i--){
    const li = ul.children[i];
    console.log(ul.removeChild(li));
}

