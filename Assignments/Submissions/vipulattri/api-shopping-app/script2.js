fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {


            for (let i = 0; i < data.length; i++) {
                let products = document.getElementById('products');
                let bigImage = document.createElement('img');
                bigImage.className = 'image';
                bigImage.src = `${data[i].image}`
                products.appendChild(bigImage)
                console.log(window.location.href);

                let url = window.location.href;
                let uri = url + `/id=${data[i].id}`
                let copyUrl = `http://127.0.0.1:3000/index.2.html/${i}`
                console.log(uri);
         


            }
        
    }
    )
