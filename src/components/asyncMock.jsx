const products = [
    {
        id: 1,
        name: "Terapia Individual",
        price: 125,
        category: "Terapia",
        img: "https://images.unsplash.com/photo-1551847677-dc82d764e1eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        stock: 1,
        description: "Terapia individual para adultos",
    },

    {
        id: 2,
        name: "Terapia Individual",
        price: 125,
        category: "Terapia",
        img: "https://images.unsplash.com/photo-1551847677-dc82d764e1eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        stock: 1,
        description: "Terapia individual para adultos",
    },

    {
        id: 3,
        name: "Terapia Individual",
        price: 125,
        category: "Terapia",
        img: "https://images.unsplash.com/photo-1551847677-dc82d764e1eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        stock: 1,
        description: "Terapia individual para adultos",
    },

    {
        id: 4,
        name: "Terapia Individual",
        price: 125,
        category: "Terapia",
        img: "https://images.unsplash.com/photo-1551847677-dc82d764e1eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        stock: 1,
        description: "Terapia individual para adultos",
    },




]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 600)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((product) => product.id === parseInt(id))
            if (product) {
                resolve(product)
            } else {
                reject('No se encontró el producto')
            }
        }, 600)
    })
}
