function computeDiscount (){
    let budget = document.getElementById("budgetInput").value;
    let dicountedPrice = Number(budget * 0.2);

    document.getElementById("discount-square").innerHTML = ` 
        <div class="container bg-secondary rounded mt-5">
            <h4 class="text-white"> Recommended Brands </h4>

            <button class="btn-primary mt-3"> Acer</button>
            <button class="btn-primary mt-3"> Asus </button>
            <button class="btn-primary mt-3"> Lenovo</button>

            <p class="text-muted"> Elligible dicount: <span class="bg-danger">${dicountedPrice} </span></p>

        </div>`;
         
}   

function GetLocations() {
    document.getElementById("discount-box").innerHTML = ` 
        <div class="container bg-secondary rounded mt-5 p-4">
            <h4 class="text-white">Branches</h4>

            <h5 class="text-warning mt-3">Lenovo</h5>
            <p class="text-white">Lenovo Exclusive Store - SM North EDSA</p>
            <p class="text-white">Lenovo Store - Greenhills Shopping Center</p>

            <h5 class="text-warning mt-3">Acer</h5>
            <p class="text-white">Acer Concept Store - SM Megamall</p>
            <p class="text-white">Acer Store - SM Mall of Asia</p>

            <h5 class="text-warning mt-3">Asus</h5>
            <p class="text-white">ASUS Concept Store - SM North EDSA</p>
            <p class="text-white">ASUS Store - Glorietta 2</p>

        </div>`;
}
