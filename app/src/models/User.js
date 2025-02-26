"use strict"

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    login(){
        const body = this.body;
        const { id, psword } = UserStorage.getUserInfo(body.id);
        
        if(id){
            if(body.id == id && body.psword == psword){
                return { success: true };
            }
            return { success: false, msg: "비밀번호가 틀렸습니다." }; 
        }
        return{ success: false, msg: "존재하지 않는 아이디 입니다."}
    }
}

module.exports = User;