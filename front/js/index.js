const containerProduct = document.querySelector('#containerProducts')

const newCard = ({id,image,title,price}) =>{
    return `
            <div class="card" id=${id}>
                    <img class="card-img" src="${image}" alt="card-img" id=${id}>
                    <h3 class="card-title" id=${id}>${title}</h3>
                    <p class="card-price" id=${id}>$${price}</p>
            </div>
        `
}

const renderCards = (array) =>{
    containerProduct.innerHTML = ''
    array.map(item =>{
        containerProduct.innerHTML += newCard(item)
    })
}

const handleDetailCard = (id) =>{
    window.location = `../pages/detail.html?idproduct=${id}`
}


const addClickDetailCard = () =>{
    const cards = document.querySelectorAll('.card')
    cards.forEach((card) => card.addEventListener('click', (e) =>{
        handleDetailCard(e.target.id)
    }))
}


const getAll = async () =>{
    try {
        const response = await fetch('http://localhost:8080/api/products')
        if (response.status !== 200) throw new Error('Error en la solicitud')
        const product = await response.json()
        renderCards(product)
    } catch (error) {
        alert(`Error ${error}`)
    }
}


document.addEventListener('DOMContentLoaded', async () =>{
    await getAll()
    addClickDetailCard()
})