var users = [
    {
        id: 1,
        name: 'John',
        email: 'john@gmail.com',
        age: 24
    },
    {
        id: 2,
        name: 'Peter',
        email: 'peter@gmail.com',
        age: 25
    },
    {
        id: 3,
        name: 'mary',
        email: 'mary@gmail.com',
        age: 23
    },
    {
        id: 4,
        name: 'Alben',
        email: 'alben@gmail.com',
        age: 32
    }

];

// target the section
var sec = document.querySelector('#container');

users.forEach((item,index) => {
    // create html tags
    let box = document.createElement('div');
    let na = document.createElement('h1');
    let em = document.createElement('h3');
    let ag = document.createElement('h5');

    // add content
    na.textContent = `${item.id} ${item.name}`;
    em.textContent = item.email;
    ag.textContent = item.age + "years";

    //appendthe child to parent tag
    box.appendChild(na);
    box.appendChild(em);
    box.appendChild(ag);

    // add parent to main block
    sec.appendChild(box);

    // adding css class to element
    box.classList.add('card');
});
