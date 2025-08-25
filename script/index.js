function getElement(id) {
    const element = document.getElementById(id);
    return element;
}
// traditional way 
// document.getElementById("card-1-add-btn").addEventListener("click", function () {
//     const title = getElement("card-1-title").innerText;
//     const price = getElement("card-1-price").innerText;

//     const mainPrice = getElement("main-price").innerText;
//     let totalPice = (Number(price) + Number(mainPrice)).toFixed(2);
//     getElement("main-price").innerText = totalPice

//     const cardContainer = getElement("card-container");
//     const newDiv = document.createElement("div")
//     newDiv.innerHTML = `
//     <div class="flex justify-between items-center p-4 mt-5">
//                         <img src="./assets/kitchen-1.png" alt="" class="w-10">
//                         <div>
//                             <h3 class="font-bold">${title}</h3>
//                             <p class="text-gray-500">${price} tk</p>
//                         </div>
//                     </div>
//     `
//     cardContainer.appendChild(newDiv);
// })


// traversing 
const addCardBtns=document.getElementsByClassName("add-to-card-btn");
for(const btn of addCardBtns){
    btn.addEventListener("click",function(){
        const ImgElement=btn.parentNode.parentNode.children[0].children[0].src;
        const titleElement=btn.parentNode.children[0].children;
        const priceElement=btn.parentNode.children[1].children[0].innerText;
        

        const price=getElement("main-price").innerText;
        const currentPrice=Number(price)+Number(priceElement);
        getElement("main-price").innerText=currentPrice;
        
        const totalItem=getElement("total-item").innerText
        let finalItem=Number(totalItem)+1;
        getElement("total-item").innerText=finalItem;
    })
}
