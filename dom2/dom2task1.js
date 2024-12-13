let cont=document.getElementById("dv")
cont.innerHTML="<img src='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg' width='300px'/> <h2>NATURE</h2> <p>Engaging Nature</p> <div><p>price:230rs</p> <button>addTocart</button><div>"
// cont.querySelector('div').style.display="flex"
// cont.querySelector('div').style.gap="100px"


let sec=document.getElementById("m")
sec.style.marginTop="50px"
sec.innerHTML="<img src='https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg' width='300px'/><h2>NATURE</h2><p>ENGAGING NATURE</p><p>Price:300rs</p><button>addtocart</button>"

var data=[{id:1,name:"deepika",course:"CSE"},{id:2,name:"sai",course:"ECE"},{id:3,name:"venkat",course:"EEE"},{id:4,name:"Reddy",course:"Mech"}]
console.log(data)
for(i=0;i<=data.length;i++){
    let card=document.createElement("ob")
    card.innerHTML=`<p>${data[i]}.id</p>`
    cardContainer.appendChilld(card)
}