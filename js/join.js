const formJoin = document.querySelector("#main_join form");
const btnJoinSubmit = document.querySelector("#main_join input[type=submit");

btnJoinSubmit.addEventListener("click",e=>{
    if(!isTxt("name",5)) e.preventDefault();
    if(!isTxt("id",7)) e.preventDefault();
    if(!isTxt("comments",20)) e.preventDefault();
    if(!isEmail("email")) e.preventDefault();
    if(!isCheck("gender")) e.preventDefault();
    if(!isPwd("pw","pw2",7)) e.preventDefault();
})


function isTxt(name,len){
    
    if(len === undefined) len = 5;

    let input = formJoin.querySelector(`[name=${name}]`);
    let txt = input.value;

    if(txt.length >= len){

        const errMsgs = input.closest("td").querySelectorAll("p");

        if(errMsgs.length>0) input.closest("td").querySelector("p").remove();

        return true;

    }else{

        const errMsgs = input.closest("td").querySelectorAll("p");

        if(errMsgs.length>0) input.closest("td").querySelector("p").remove();

        const errMsg = document.createElement("p");
        errMsg.append(`* ${len}글자 이상 입력하세요.`);
        input.closest("td").append(errMsg);

        return false;
    }
}

function isEmail(name){

    let input = formJoin.querySelector(`[name=${name}]`);
    let txt = input.value;

    if(/@/.test(txt)){

        return true;

    }else{

        const errMsgs = input.closest("td").querySelectorAll("p");

        if(errMsgs.length>0) input.closest("td").querySelector("p").remove();

        const errMsg = document.createElement("p");
        errMsg.append(`* @를 포함한 전체 이메일 주소를 입력하세요.`);
        input.closest("td").append(errMsg);

        return false;
    }
}


function isCheck(name){

    let inputs = document.querySelectorAll(`[name=${name}]`);
    let isCheck = false;
 
    for(let el of inputs){
        if(el.checked) isCheck = true;
    }

    if(isCheck){
 
        const errMsgs = inputs[0].closest("td").querySelectorAll("p");
        if(errMsgs.length > 0) inputs[0].closest("td").querySelector("p").remove();

        return true;

    }else{
  
        const errMsgs = inputs[0].closest("td").querySelectorAll("p");
        if(errMsgs.length > 0) inputs[0].closest("td").querySelector("p").remove();

        const errMsg = document.createElement("p");
        errMsg.append("* 필수 입력 항목을 체크해주세요.");

        inputs[0].closest("td").append(errMsg);

        return false;
    }
}


function isPwd(name1,name2,len){
    
    let pwd1 = formJoin.querySelector(`[name=${name1}]`);
    let pwd2 = formJoin.querySelector(`[name=${name2}]`);
    let pwd1_val = pwd1.value;
    let pwd2_val = pwd2.value;

    const num = /[0-9]/;
    const eng = /[a-zA-Z]/;
    const spc = /[!@#$%^&*()_+]/;

    if(pwd1_val === pwd2_val && pwd1_val.length >= len && num.test(pwd1_val) && eng.test(pwd1_val) && spc.test(pwd1_val)){

        const errMsgs = pwd1.closest("td").querySelectorAll("p");

        if(errMsgs.length>0) pwd1.closest("td").querySelector("p").remove();

        return true;

    }else{

        const errMsgs = pwd1.closest("td").querySelectorAll("p");

        if(errMsgs.length>0) pwd1.closest("td").querySelector("p").remove();

        const errMsg = document.createElement("p");
        errMsg.append(`* 비밀번호는 ${len}글자 이상, 영문, 숫자, 특수문자를 포함하여 입력하세요.`);
        pwd1.closest("td").append(errMsg);

        return false;
    }
}