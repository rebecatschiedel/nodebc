function validateUser(username, password) {

    switch(true) {
        case (username === 'nacho' && password === 'Nerd1979'):
            console.log(`Welcome ${username}, nice to see you again `);
            return true;
        case (username === 'pedro' && password === 'Batman0217'):
            console.log(`Welcome ${username}, nice to see you again `);
            return true;
        case (username === 'marta' && password === 'Mother2312'):
            console.log(`Welcome ${username}, nice to see you again `);
            return true;
        default:
            console.log('Please input valid credentials');
            return false;
    }
}

validateUser('nacho', 'Nerd1979');
validateUser('macho', 'Nerd1979');