let display = (value) => {
    console.log(value);
    value.map((ele) => {
        let img = document.createElement("img");
        img.src = ele.thumbnail;
        let title = document.createElement("h2")
        title.innerHTML = ele.title;
        let price = document.createElement("h1")
        price.innerHTML = ele.price;
        let disc = document.createElement("p")
        disc.innerHTML = ele.description;
        let btn = document.createElement("button");
        btn.innerHTML = `<a href="https://www.amazon.in/">buy now</a>`;
        btn.addEventListener("click", function () {
            console.log("you have selected" + ele.title);
        });
        let div = document.createElement("div");
        div.append(img, title, price, disc, btn);
        document.getElementById("result").append(div);
    });

};
let getProducts = async () => {
    try {
        let res = await fetch("https://dummyjson.com/products");
        let products = await res.json();
        display(products.products)
        console.log(products);

    }
    catch (error) {
        console.log(error.message);
        document.getElementById("result").innerHTML = "server error"
    }


};
getProducts();