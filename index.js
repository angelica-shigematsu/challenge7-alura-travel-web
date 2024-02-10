const data = [
  {
    id: 1,
    name: 'Madri',
    price: 500,
    img: `assets/images/madri.jpg`
  },
  {
    id: 2,
    name: 'Portugal',
    price: 500,
    img: `assets/images/portugal.jpg`
  },
  {
    id: 3,
    name: 'Indonésia',
    price: 500,
    img: `assets/images/indonesia.jpg`
  }

]

window.addEventListener("load", function(e) {
  data.forEach(place => {
  document.getElementById("destino").innerHTML += 
    `
  <div class="section_cart section_cart_destination">
    <img src=${place.img} alt="foto de ${place.name}" class="img_destinos">
    <p class="section_destino_cart_name">${place.name}</p>
    <p class="section_destino_cart_name">R$${place.price}</p>
    <a href="#" class="button_section_img btnDestino">Detalhes</a>
  </div>
  `;
  })
})


document.getElementsByClassName('section_search_img')[0].addEventListener('click', function(event) {
  let destination = document.getElementById("place").value;
  event.preventDefault();

  document.getElementById("destino").innerHTML = ''
  // var classes = event.currentTarget;
    if (!destination) {
      valueNotFound();

    }else{
      data.forEach(place => {
        if ((place.name).toLowerCase().includes(destination.toLowerCase())) {
          document.getElementById("destino").innerHTML += 
          `
        <div class="section_cart section_cart_destination">
          <img src=${place.img} alt="foto de ${place.name}" class="img_destinos">
          <p class="section_destino_cart_name">${place.name}</p>
          <p class="section_destino_cart_name">R$${place.price}</p>
          <a href="#" class="button_section_img btnDestino">Detalhes</a>
        </div>
        `;
        }
    })  
    if (!document.getElementById("destino").innerHTML) {
      valueNotFound();
    }
    destination = ''
}});

const valueNotFound = () => {
  document.getElementById("destino").innerText = "Campo vazio";
}