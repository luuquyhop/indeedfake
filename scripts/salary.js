// "https://indeed-data.vercel.app/Indded"

// Use deployed URL.
// window.addEventListener("load", () => {
//     getData();
// })
  
import {navbar,signin_navbar} from "../components/navbar.js"
let nav = document.getElementById('navbar')
let data=JSON.parse(localStorage.getItem('signinsatus'))
if(data ===true){
  nav.innerHTML = signin_navbar()
}else{
  nav.innerHTML = navbar();
}

import {footbar} from "../components/footbar.js"
document.getElementById("Footbar").innerHTML=footbar();

let getData = async () => {
    let res = await fetch("https://indeed-data.vercel.app/Indded");
    let data = await res.json();
    renderDom(data);
    console.log(data);

}



getData();

let renderDom = (data) => {
    let cont = document.getElementById("result1")
    cont.innerHTML = ""

    data.forEach(({ Title, Yearsalary, id }) => {
        let item1 = document.createElement("div");
        item1.setAttribute("class", "item11")
        item1.onclick = () => {
            order(Title, Yearsalary,id);
        }

        let div1 = document.createElement("div");
        div1.setAttribute("id", "box1")


        let p1 = document.createElement("p");
        p1.setAttribute("id", "p1");
        p1.innerText = Title;

        let box = document.createElement("div");
        box.setAttribute("id", "box")

        let p2 = document.createElement("h3");
        p2.setAttribute("id", "p2");
        p2.innerText = "Average Salary";
        let p3 = document.createElement("p");
        p3.innerText = Yearsalary;

        let p4 = document.createElement("p");
        p4.setAttribute("id", "p4");
        p4.innerText = "Job Openings";


        box.append(p2, p3);
        div1.append(p1, box);
        item1.append(div1, p4);
        cont.append(item1);

        // -------------------------------------------------//-------------------------------//

        let cont1 = document.getElementById("result2");
        cont1.innerHTML = "";

        data.forEach(({ company, logoImg, rating }) => {
            let item2 = document.createElement("div");
            item2.setAttribute("class", "item22");


            let div2 = document.createElement("div");
            div2.setAttribute("id", "box2");

            let div3 = document.createElement("div");
            div3.setAttribute("id", "div3");

            let div4 = document.createElement("div");
            div4.setAttribute("id", "div4");

            let pic = document.createElement("img");
            pic.src = logoImg;

            let p5 = document.createElement("h2");
            p5.setAttribute("id", "p5");
            p5.innerText = company;

            let p6 = document.createElement("p");
            p6.innerText = rating;

            div3.append(pic);
            div4.append(p5, p6);
            div2.append(div3, div4);
            item2.append(div2);
            cont1.append(item2);

        })

    })
}

// let arr = JSON.parse(sessionStorage.getItem("salary")) || [];

let order = async ( Title, Yearsalary, id ) => {
    console.log(Title, Yearsalary, id)
    let Pdata = {
        Title: Title,
        Yearsalary: Yearsalary,
        id: id,
    }
    // console.log(Pdata)
    // arr.push(Pdata);
    sessionStorage.setItem("salary", JSON.stringify(Pdata));
    window.location.href = "salary2.html"

}




