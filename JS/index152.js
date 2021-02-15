const user = {
    username: null,
    password: null,
    greet: function () {
        if (this.username !== null) {
            console.log(`Hello, I am user ${this.username}`);
        } else {
            console.log('Please assign a username value');
        };
    },
    updateUsername: function (newUserName) {
        this.username = newUserName;
    },
    updatePassword: function (newPassword) {
        this.password = newPassword;
    }

};

user.greet();
user.updateUsername('Mary');
user.updatePassword('QWERTY');
user.greet();
console.log(user);