let ul = document.querySelector('ul');

for (i = 0; i < ul.children.length; i++){
    const li = ul.children[i];
    ul.removeChild(li);
    
    //because you are removing an item, it shifts the index of the next node.
    i--;
}

