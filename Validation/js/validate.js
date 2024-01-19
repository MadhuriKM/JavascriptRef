function validate(e) {
    e.preventDefault();
    /* variables for each form elements */
        // document.formName.fieldName.value
    var name = document.cForm.name.value;
    var email = document.cForm.email.value;
    var mobile = document.cForm.mobile.value;
    var city = document.cForm.city.value;
    var gender = document.cForm.gender.value;
    var lang=[];
    var checkOpt = document.getElementsByName("lang[]");
    for(var i=0;i<checkOpt.length;i++){
        if(checkOpt[i].checked) {
            // popular lang array with selected input values
            lang.push(checkOpt[i].value);
        }
    }
        
    console.log('lang =', lang)

    /* define an error variables */ 
    var nameErr = emailErr = mobileErr = genderErr = langErr = true;
   // var nameErr = true;
    //var emailErr = true;
    //var mobileErr = true;
    //var genderErr = true;
    //var langErr = true;

    /* name validation */
    if(name === ""){
        printError("nameErr","Name field cannot be empty");
    }else {
        let regex = /^[a-zA-Z\s]+$/;
    

    /* 
        /reg exp/
        ^ -> beginning match
        \s -> white space \S -> not white space
        $ -> endig match
        + -> 1 match or more than 1
    */

        if(regex.test(name)===false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr","");
            nameErr = false
        }
    }

    /* email validation */
    if(email === ""){
        printError("emailErr", "Email field cannot be empty");
    } else {
        let regex = /^[a-zA-Z0-9\S]+@[a-zA-Z0-9\S]+\.[a-zA-Z\S]{2,6}$/;
        if(regex.test(email)=== false) {
            printError("emailErr", "Invalid Email id");
        } else {
            printError("emailErr","")
            emailErr = false;
        }
    }

    /* mobile validation */
    if(mobile === "") {
        printError("mobileErr", "Mobile fiels cannot be empty");
    } else {
        let regex = /^(\+91|0|91)?[6-9]\d{9}$/;

        /* 
            \d decimal
            \D no digit
            099556688665
            +91n9988776655
            91
            9988776655
        */
       if(regex.test(mobile) === false){
        printError("mobileErr","Invalid Mobile number");
       } else {
            printError("mobileErr","");
            mobileErr = false
       }
    }

    /* city validation */
    if(city === "null") {
        printError("cityErr", "Please select city name");
    } else {
        printError("cityErr", "");
        cityErr = false;
    }

    /* gender validation */
    if(gender === "") {
        printError("genderErr", "Peease select gender");
    } else {
        printError("genderErr","");
        genderErr = false;
    }

    // lang validation
    if(lang.length === 0) {
        printError("langErr", "Please select language")
    } else {
        printError("langErr", "");
        langErr = false;
    }

    if(!(nameErr || emailErr || mobileErr || genderErr || cityErr || langErr)) {
        let data = {
            name: name,
            email: email,
            mobile : mobile,
            gender: gender,
            city: city,
            language: lang
        };
        console.log('data =', data);
    }
}

/* defining a function to display the error message */
function printError(eleId,msg) {
    document.getElementById(eleId).innerText = msg;
}

function resetForm(e){
    alert("Form reset completed");
    window.location.reload();
}
