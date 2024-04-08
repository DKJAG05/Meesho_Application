import WomenEthnic from "./navbarList/WomenEthnic.js" 
import WomenWestern from "./navbarList/Women Western.js"
import Men from "./navbarList/Men.js"
import Kids from "./navbarList/Kids.js"
import JewelleryAccessories from "./navbarList/Jewellery & Accessories.js"
import HomeAndKitchen from "./navbarList/Home & Kitchen.js"
import BeautyHealth from "./navbarList/Beauty & Health.js"
import BagsFootwear from "./navbarList/Bags & Footwear.js"
import Electronics from "./navbarList/Electronics.js"



let inputSearchE1 = document.querySelector(".inputSearch")
let recentInput =[]
let formInputE1 = document.getElementById("inputForm")
const listofRecentE1 = document.querySelector(".listofRecent")


inputSearchE1.addEventListener("keydown",()=>{
    // console.log(inputSearchE1)
    if(inputSearchE1.value){
        document.getElementById("closeSearch").style.display = "block"      
    } else {
        document.getElementById("closeSearch").style.display = "none"   
    }
})

formInputE1.addEventListener("submit",(e)=>{
    e.preventDefault()
    let listofRecentHTMLE1 =""

    recentInput.unshift(inputSearchE1.value)
    console.log(recentInput);

    if(recentInput.length > 0){
        for ( let i = 0; i < recentInput.length; i++ ){
            listofRecentHTMLE1 +=
            `<div class="recentItem">
            <div class="recentIcon">
              <i class="fa-regular fa-clock"></i>            
            </div>          
                      
            <p>${recentInput[i]}</p>
            </div>   `      
                                                       
            
        }
        listofRecentE1.innerHTML = listofRecentHTMLE1
    }
})

                                  /* Navbar Lists */
// Function Reusable 

function renderSubMenu(id,data){
     let temp = document.getElementById(id)

function TempFunc() {    
     return data.map(el=>{
        let list = "";
       list = el.data.map(element => ` <p> ${element}</p> `) .join("")
       return `      
        <div class="column">
        <h4> ${el.heading} </h4>
        ${ list }
        </div>
        `
        
    }).join("")

}

temp.innerHTML=TempFunc()
}

renderSubMenu("womenEthnic",WomenEthnic)
renderSubMenu ("womenWestern",WomenWestern)
renderSubMenu ("men",Men)
renderSubMenu ("kids",Kids)
renderSubMenu ("homeandkitchen",HomeAndKitchen)
renderSubMenu ("beautyandhealth",BeautyHealth)
renderSubMenu ("jewelleryandaccessories",JewelleryAccessories)
renderSubMenu ("bagsandfootwear",BagsFootwear)
renderSubMenu ("electronics",Electronics)

                                /*  womenEthnic  */
// let womenEthnic = document.getElementById("womenEthnic")

// function womenEthnicFunc() {    
//      return WomenEthnic.map(el=>{
//         let list = "";
//        list = el.data.map(element => ` <p> ${element}</p> `) .join("")
//        return `      
//         <div class="column">
//         <h4> ${el.heading} </h4>
//         ${ list }
//         </div>
//         `
        
//     }).join("")

// }

// womenEthnic.innerHTML=womenEthnicFunc()

                                      /* WomenWestern */

// let womenWestern = document.getElementById("womenWestern")

// function womenWesternFunc() {    
//      return WomenWestern.map(el=>{
//         let list = "";
//        list = el.data.map(element => ` <p> ${element}</p> `) .join("")
//        return `      
//         <div class="column">
//         <h4> ${el.heading} </h4>
//         ${ list }
//         </div>
//         `
        
//     }).join("")

// }

// womenWestern.innerHTML=womenWesternFunc()

//                                      /* Men */

// let men = document.getElementById("men")

// function menFunc() {    
//      return Men.map(el=>{
//         let list = "";
//        list = el.data.map(element => ` <p> ${element}</p> `) .join("")
//        return `      
//         <div class="column">
//         <h4> ${el.heading} </h4>
//         ${ list }
//         </div>
//         `
        
//     }).join("")

// }

// men.innerHTML=menFunc()

//                                               /* Kids */

// let kids = document.getElementById("kids")

// function kidsFunc() {    
//      return Kids.map(el=>{
//         let list = "";
//        list = el.data.map(element => ` <p> ${element}</p> `) .join("")
//        return `      
//         <div class="column">
//         <h4> ${el.heading} </h4>
//         ${ list }
//         </div>
//         `
        
//     }).join("")

// }

// kids.innerHTML=kidsFunc()

//                                         /* Home & Kitchen */

// let homeandkitchen = document.getElementById("homeandkitchen")

// function homeandkitchenFunc() {    
//      return HomeAndKitchen.map(el=>{
//         let list = "";
//        list = el.data.map(element => ` <p> ${element}</p> `) .join("")
//        return `      
//         <div class="column">
//         <h4> ${el.heading} </h4>
//         ${ list }
//         </div>
//         `
        
//     }).join("")

// }

// homeandkitchen.innerHTML=homeandkitchenFunc()

//                                        /* Beauty & Health */

// let beautyandhealth = document.getElementById("beautyandhealth")

// function beautyandhealthFunc() {    
//      return BeautyHealth.map(el=>{
//         let list = "";
//        list = el.data.map(element => ` <p> ${element}</p> `) .join("")
//        return `      
//         <div class="column">
//         <h4> ${el.heading} </h4>
//         ${ list }
//         </div>
//         `
        
//     }).join("")

// }

// beautyandhealth.innerHTML=beautyandhealthFunc()


//                                      /* Jewellery & Accessories */

// let jewelleryandaccessories = document.getElementById("jewelleryandaccessories")

// function jewelleryandaccessoriesFunc() {    
//      return JewelleryAccessories.map(el=>{
//         let list = "";
//        list = el.data.map(element => ` <p> ${element}</p> `) .join("")
//        return `      
//         <div class="column">
//         <h4> ${el.heading} </h4>
//         ${ list }
//         </div>
//         `
        
//     }).join("")

// }

// jewelleryandaccessories.innerHTML=jewelleryandaccessoriesFunc()

//                                          /* Bags & Footwear */

// let bagsandfootwear = document.getElementById("bagsandfootwear")

// function bagsandfootwearFunc() {    
//      return BagsFootwear.map(el=>{
//         let list = "";
//        list = el.data.map(element => ` <p> ${element}</p> `) .join("")
//        return `      
//         <div class="column">
//         <h4> ${el.heading} </h4>
//         ${ list }
//         </div>
//         `
        
//     }).join("")

// }

// bagsandfootwear.innerHTML=bagsandfootwearFunc()

//                                       /* electronics */

// let electronics = document.getElementById("electronics")

// function electronicsFunc() {    
//      return Electronics.map(el=>{
//         let list = "";
//        list = el.data.map(element => ` <p> ${element}</p> `) .join("")
//        return `      
//         <div class="column">
//         <h4> ${el.heading} </h4>
//         ${ list }
//         </div>
//         `
        
//     }).join("")

// }

// electronics.innerHTML=electronicsFunc()


/* ************************* */
import Productdata from "./ListImg/data.js"

const category = [...new Set(Productdata.map(el => el.category))]
console.log(category)



// console.log(watchEl)
let filterData = []

document.addEventListener("click",(e)=>{

const Bluetooth_headsetEl = document.getElementById("Bluetooth_headset").checked
const Men_ChainEl = document.getElementById("Men_Chain").checked
const KurtasEl =  document.getElementById("Kurtas").checked
const MobileAccessoriesEl =  document.getElementById("MobileAccessories").checked
const SareesEl =  document.getElementById("Sarees").checked
const watchEl = document.getElementById("watch").checked

    // console.log(e.target.id)
    // console.log(document.getElementById(e.target.id).checked)

    filterData = Productdata.filter(el => (
        Bluetooth_headsetEl && el.category == "bluetooth Headset" || 
        Men_ChainEl && el.category == "Men Chains" ||
        KurtasEl && el.category == "Kurtas" ||
        MobileAccessoriesEl && el.category == "Mobile Accessories" ||
        SareesEl && el.category == "sarees" ||
        watchEl && el.category == "watch"       
    ))

    // console.log(filterData)  
    renderProductData() 
    
})
function renderProductData(){
    let filterDataHTML ="";

    if(filterData[0]){
        filterData.forEach(el => {
            filterDataHTML += `
                            <div class="productCard" onclick="ClickProduct(${el.id})">
                                <div class="Product_image">
                                    <img src="./ListImg/${el.img}">
                                </div>
                                <p class="product_name">${el.name}</p>
                                <p class="product_price">
                                    <span> <i class="fa-solid fa-indian-rupee-sign"></i> </span>
                                    <span>${el.price}</span>
                                 </p>
                            </div>
                            `
        })
    }
    else {
        Productdata.forEach(el => {
            filterDataHTML += `
                            <div class="productCard" onclick="ClickProduct(${el.id})">
                                <div class="Product_image">
                                    <img src="./ListImg/${el.img}">
                                </div>
                                <p class="product_name">${el.name}</p>
                                <p class="product_price">
                                    <span> <i class="fa-solid fa-indian-rupee-sign"></i> </span>
                                    <span>${el.price}</span>
                                 </p>
                            </div>
                            `
        })
        
    }
    

    document.getElementById("product_category_displayId").innerHTML = filterDataHTML

}
renderProductData() 

function ClickProduct(id) {
    localStorage.setItem("productId",JSON.stringify(id))
    window.location("./page/product.html")
}
