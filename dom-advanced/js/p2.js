document.querySelector('#btn').addEventListener('click', (event) => {
    event.preventDefault(); //avoid page refresh
    fetch('https://dummyjson.com/products')
         .then(res => res.json())
         .then(res => {
            console.log('res =', res)
         })
          .catch(err => {
            console.log(err)
          })
});

//dom target
var container = document.querySelector("#container");

//print data
const display = (output) => {
    output.forEach((item,index) => {
        //html
        let card = document.createElement('div');
        let image = document.createElement('img');
        let title = document.createElement('h3');
        let desc = document.createElement('p');
        let price = document.createElement('p');

        //adding content
        image.src = item.thumbnail;
        title.textContent = item.title;
        desc.textContent = item.description;
        price.textContent = item.price;

        //appending child
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(price);
        //append card to main container
        container.appendChild(card);
    });
}