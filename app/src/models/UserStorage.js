"use strict"

class UserStroage{
    static #users = {
        id: ["ahffkid", "ehgus3493", "한도현"],
        psword: ["1234", "5678", "12345678"],
    }
    
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, fields) => {
            if(users.hasOwnProperty) newUsers[fields] = users[fields];
            return newUsers;
        }, {})
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {})

        return userInfo;
    }
}

module.exports = UserStroage;