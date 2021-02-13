let showName = function(){
    let name = 'Necipoglu';
    let border = '';
    for (let i=0; i < name.length + 4; i++) {
        border += '=';
    }
    console.log(border);
    console.log(`= ${name} =`);
    console.log(border);
};

showName();
showName();