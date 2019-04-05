
export function getInfo() {
    let raw = document.getElementById("info").action;
    let info = raw.slice(37, ).split("&");
    let name = info[0].slice(5,).split("+").join(" ");
    let gender = info[1].slice(7,);
    let address = info[2].slice(8,).split("+").join(" ");
    let tel = info[3].slice(4,);
    let email = info[4].slice(6, ).split("%40").join("@");
    let defaultLoation = info[5].slice(16,);
    let password = info[6].slice(9,);
    console.log(info);
    updateInfo(name, gender, address, tel, email, defaultLoation, password);
}

function updateInfo(name, gender, address, tel, email, defaultLoation, password) {
    let user_id = "A001";
    // aName = name;
    firebase.database().ref("user/" + user_id + "/").update({
        aName: name,
        bGender: gender,
        cAddress: address,
        dTel: tel,
        eEmail: email,
        fDefaultLocation: defaultLoation,
        gPassword: password
    });
    
}
getInfo();