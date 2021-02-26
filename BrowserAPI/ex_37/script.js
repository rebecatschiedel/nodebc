document.addEventListener('keypress', (e) => {
    console.log(`You pressed the ${String.fromCharCode(e.charCode)} key with the ${e.charCode} code`);
})