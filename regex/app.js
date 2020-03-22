// Checking for the content

document.getElementById("name").addEventListener("blur",checkName);

document.getElementById("zip").addEventListener("blur",checkZip);

document.getElementById("email").addEventListener("blur",checkEmail);

document.getElementById("phone").addEventListener("blur",checkPhone);


function checkName(e){
    let name = e.target.value;
    let regex =/^[a-zA-Z]{2,7}$/ ;

    if(!regex.test(name)){
        e.target.classList.add("is-invalid");
    }else{
        e.target.classList.remove("is-invalid");
    }
}

function checkZip(e){
    let zip = e.target.value;
    let regex =/^[0-9]{5}(-[0-9]{5})?$/ ;

    if(!regex.test(zip)){
        e.target.classList.add("is-invalid");
    }else{
        e.target.classList.remove("is-invalid");
    }
}

function checkEmail(e){
    let email = e.target.value;
    let regex =/^[a-zA-Z0-9\_\-\.]{2,17}@[a-zA-Z0-9\_\-]{2,17}\.[a-z]{2,5}$/ ;

    if(!regex.test(email)){
        e.target.classList.add("is-invalid");
    }else{
        e.target.classList.remove("is-invalid");
    }
}

function checkPhone(e){
    let phone = e.target.value;
    const regex = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    if(!regex.test(phone)){
        e.target.classList.add("is-invalid");
    }else{
        e.target.classList.remove("is-invalid");
    }
}