// localStorage data
let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem("users")): [];


// dom
let formSubmit = document.getElementById("userForm");

let fname = document.getElementById("name");
let femail = document.getElementById("email");
let fmobile = document.getElementById("mobile");

// submit handler
formSubmit.addEventListener("submit", function (event){
    event.preventDefault();  // avoid page refresh
    let newUser = {
        id: Math.floor(Math.random() * 10000),
        name: fname.value,
        email: femail.value,
        mobile: fmobile.value
    };
    console.log(`new user =`, newUser);

    // validate email and mobile
    let extEmail = users.find(item => item.email === newUser.email);
    let extMobile = users.find(item => item.mobile === newUser.mobile);

    if(extEmail) {
        alert(`${newUser.email} already exist`)
    } else if(extMobile) {
        alert(`${newUser.mobile} already exist`)
    } else {
        users.push(newUser);  // push data into array
        saveData(users);  // store
        alert('New user created successfully');
        window.location.href = "/Storage/index.html"
    }
});

// store
const saveData = (data) => {
    localStorage.setItem('users', JSON.stringify(data))
}

