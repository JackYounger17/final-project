let products = [ // product information that generates the cards
    {brand: "Optimum Nutrition", name: "Mass Gainer", image: "images/protein1.jpg", price: "24.99$", description: "This is a high calorie and high protein powder made to support those on a bulk."},
    {brand: "Optimum Nutrition", name: "Chocolate Whey Protein", image: "images/protein2.jpg", price: "19.99$", description: "This chocolate flavoured whey protein is a perfect boost to your daily protein needs."},
    {brand: "Optimum Nutrition", name: "Creatine Monohydrate", image: "images/creatine1.jpg", price: "22.99$", description: "Creatine Monohydrate boosts muscle strength and endurance helping you reach new limits."},
    {brand: "Optimum Nutrition", name: "Raspberry PreWorkout", image: "images/prework1.jpg", price: "14.99$", description: "This delicious raspberry flavoured pre workout will give you an abundance of energy for your workouts."},
    {brand: "Optimum Nutrition", name: "Strawberry Protein Shake", image: "images/shake1.jpg", price: "1.99$", description: "This shake contains lots of protein. Perfect for when you are on the go."},
    {brand: "Optimum Nutrition", name: "BCAA Powder", image: "images/bcaa1.jpg", price: "19.99$", description: "BCAA powder helps boost muscle recovery. Perfect after a hard session in the gym."},
    {brand: "MyProtein", name: "Whey Protein", image: "images/protein3.jpg", price: "24.99$", description: "Whey protein is an great supplement to add to your diet to help you reach your protein goals."},
    {brand: "MyVitamins", name: "Creatine Tablets", image: "images/creatine2.jpg", price: "8.99$", description: "Creatine Monohydrate boosts muscle strength and endurance helping you reach new limits."},
    {brand: "MyProtein", name: "Creatine Monohydrate", image: "images/creatine3.jpg", price: "24.99$", description: "Creatine Monohydrate boosts muscle strength and endurance helping you reach new limits."},
    {brand: "Optimum Nutrition", name: "Chocolate Protein Bar", image: "images/bar1.jpg", price: "2.49$", description: "This snack contains high protein and  is perfect for those on the go."},
    {brand: "MyVitamins", name: "PreWorkout", image: "images/prework2.jpg", price: "1.99$", description: "This pre workout will give you an abundance of energy for your gym session."},
    {brand: "Bodytech", name: "Creatine Monohydrate", image: "images/creatine4.jpg", price: "17.99$", description: "Creatine Monohydrate boosts muscle strength and endurance helping you reach new limits."},
];

function showProduct(product) { // replaces the html structure in the index.html with these dynamically generated cards
    $('#productList').html('');
    product.forEach(product => {
        let productCard = `
        <div>
            <a href="product.html" class="text-decoration-none product-link"
                data-brand="${product.brand}"
                data-name="${product.name}"
                data-price="${product.price}"
                data-image="${product.image}"
                data-description="${product.description}">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body text-center">
                        <h2 class="card-title">${product.brand}</h2>
                        <h3 class="card-title">${product.name}</h3>
                        <p class="card-text">${product.price}</p>
                        <button class="card-button"
                            data-brand="${product.brand}"
                            data-name="${product.name}"
                            data-price="${product.price}"
                            data-image="${product.image}"
                            data-description="${product.description}">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </a>
        </div>
        `;
        $('#productList').append(productCard);
    });
}
$('#searchBar').on('input', function() {
    let searchTerm = $(this).val().toLowerCase(); // filters products by the name
    let filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    showProduct(filteredProducts); // shows the products
});
$(document).ready(function() {
    showProduct(products);
});
$(document).on('click', '.card-button', function(e) {
    e.stopPropagation();//stops the add to cart and product information buttons from overlapping
    e.preventDefault();
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    let cart_item = {
        brand: $(this).data('brand'),
        name: $(this).data('name'),
        price: $(this).data('price'),
        image: $(this).data('image'),
    };
    cart.push(cart_item); //puts the data into the browser localstorage
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    alert(`${cart_item.name} has been added to your cart!`);
});

$(document).on('click', '.product-link', function (e) {
    e.preventDefault();
    let productDetails = {
        brand: $(this).data('brand'),
        name: $(this).data('name'), // for product page
        price: $(this).data('price'),
        image: $(this).data('image'),
        description: $(this).data('description')
    };
    localStorage.setItem('selectedProduct', JSON.stringify(productDetails));
    document.location.href = 'product.html'; // redirects to the product page
});
