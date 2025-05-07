
function appendDataToHTML() {
    fetch('https://fakestoreapi.com/products')
        .then(
            res => res.json())
        .then(
            data => {

                console.log(data);
                
                    var products = document.getElementById('products')
                    for (let i = 0; i < data.length; i++) {

                        var card = document.createElement('div');
                        products.appendChild(card)

                        products.appendChild(card)
                        card.className = 'card';
                        var image = document.createElement('img');
                        image.id = 'image';
                        image.src = `${data[i].image}`
                        var title = document.createElement('a')
                        title.href = `index2.html/?id=${data[i].id}`
                        let a = title.href;
                        title.textContent = `${data[i].title}`
                        title.className = 'title'

                        card.appendChild(image)
                        card.appendChild(title)
                    }
           
            }


        )
}
appendDataToHTML();

