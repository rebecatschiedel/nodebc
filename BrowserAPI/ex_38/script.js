 let div = document.querySelector('div');

 document.addEventListener('keypress', (e) => {
     div.innerText = `You pressed the ${String.fromCharCode(e.charCode)} key with the ${e.charCode} code`
 });

 div.style.fontSize = '20px';
 div.style.color = 'red';
 div.style.fontFamily = 'Arial';
 div.style.paddingBottom = '20px';