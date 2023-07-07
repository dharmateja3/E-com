const FetchData = async()=>{
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    for (let i =0 ; i<data.products.length; i++){
        const myCont = document.getElementById("mymain");
        const card = document.createElement("div");
        const image = document.createElement("img");
        const title = document.createElement("span");
        const price = document.createElement("span");

        card.classList.add("card");
        image.classList.add("image");
        title.classList.add(`drop`);
        price.classList.add(`drop`);
    
        image.src=data.products[i].thumbnail;
        title.innerText=data.products[i].brand;
        price.innerText=data.products[i].price;

        card.append(image,title,price);
        myCont.append(card);
    } 
};

const verify=()=>{
    if(localStorage.auth){
        FetchData();
    }
    else{
        window.location.href="/login.html";
    }
};
const logout=()=>{
    alert(`Logged Out Successfully!!`);
    localStorage.removeItem(`auth`);
    window.location.href="/login.html"
};