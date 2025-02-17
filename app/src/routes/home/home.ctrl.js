"use strict"

const users = {
    id: ["ahffkid", "ehgus3493", "한도현"],
    psword: ["1234", "5678", "12345678"],
}

const output = {
    hello: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    }
}

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const psword = req.body.psword;
        
        console.log(id, psword);

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] == psword){
                return res.json({
                    success: true,
                })
            } 
        }
        return res.json({
            success: false,
            message: "로그인에 실패했습니다.",
        })
    }
}

module.exports = {
    output,
    process,
}
