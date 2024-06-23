const containerDetail = document.querySelector('#containerDetail')


const getProduct = async () =>{
    const url = new URLSearchParams(window.location.search)
    const id = url.get('idproduct')

    try {
      let response = await fetch(`http://localhost:8080/api/products/${id}`)
      let product = await response.json()
      if (product) return product
    } catch (error) {
      alert(`No existe el product ${error}`)
    }
}


getProduct()


const renderDetail = (product) => {
    const {title, price, description, image} = product
    containerDetail.innerHTML = `
                <div class="card-detail">
                    <img class="img-product" src="${image}" alt="card">
                    <div class="detail-product">
                    <h3 class="title-product">${title}</h3>
                    <p class="price-product">$${price}</p>
                    <p class="description-product">${description}</p>
                    <button class="add-product">Add to Cart</button>
                </div>
    ` 

}

document.addEventListener('DOMContentLoaded', async () =>{
    let product = await getProduct()
    renderDetail(product)
})

