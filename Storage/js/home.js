// localstorage data
let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem("users")) : [];

let userList = document.getElementById("userList");

const deleteUser = (id) => {
   if(window .confirm(`Are you sure to delete user id ${id}?`)) {
    let extUser = users.findIndex(item => item.id === Number(id));  // return index position
    users.splice(extUser,1)  // delete
    saveData(users)
    alert('user data deleted successfully')
    window.location.reload()
   }

}

// store
const saveData = (data) => {
    localStorage.setItem('users', JSON.stringify(data))
}

function printData(data) {
    data.forEach(item => {
        userList.innerHTML += `<tr>
                                 <td> ${item.id}</td>
                                 <td> ${item.name}</td>
                                 <td> ${item.email}</td>
                                 <td> ${item.mobile}</td>
                                 <td>
                                    <a class="btn btn-info">Edit</a>
                                    <button onclick="deleteUser(${item.id})" class="btn btn-danger">Delete</button>
                                 </td>
                                </tr>`;
    });
}

printData(users)