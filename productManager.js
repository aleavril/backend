// Aqui se crea el array vacio para los productos
let products = [];

// En esta funcion recibe los datos de los productos que necesitamos con sus propiedades
const addProduct = (title, description, price, thumbnail, code, stock) => {

    const newProduct = { //Objeto que contiene los datos que nos piden para los productos
        id: products.length + 1, // Esto es para que se autoincremente el ID del producto que comienza en 0 en el array
        title, //aqui no hace falta declarar el valor de la propiedad porque en una funcion se sabe que lo que se pasa es el nombre de la propiedad en si
        description,
        price,
        thumbnail,
        code,
        stock
    }

    // if(title === undefined || description === undefined || price === undefined || thumbnail === undefined || code === undefined || stock === undefined){
    //    console.log("Todos los campos son obligatorios");
    //    return
    // }

    if(Object.values(newProduct).includes(undefined)) { //Esta condicion verifica que no haya un undefined para que el producto se agregue solo si tiene todas las propiedades
        console.log("Todos los campos son obligatorios");
        return
    }

    const productExists = products.find( product => product.code === code); //en esta funcion se valida que no se repita el campo CODE
    if(productExists) {
        console.log(`El producto ${title} con el codigo ${code} ya existe`);
        return; // return para que no se ejecute el push de abajo
    }

    products.push(newProduct); //Aqui agrega el producto al array sino no lo muestra en consola, lo agrega si se cumplen los dos IF de arriba
}

const getProducts = () => { //esta funcion simplemente muestra los productos
    console.log(products); //
    return products;
}

const getProductById = (id) => { //esta funcion muestra productos por ID siempre y cuando exista
    const product = products.find( product => product.id === id);
    if(!product) {
        console.log(`No se encontro el producto con el id ${id}`);
        return;
    }

    console.log(product); //muestra el producto si lo encuentra
    return product;
};

// Test

addProduct("Producto 1", "el primer producto", 299, "http://www.google.com", "ADF123", 10); //Producto
addProduct("Producto 2", "el segundo producto", 899, "http://www.google.com", "ADF124", 10); //Producto
addProduct("Producto 3", "el tercer producto", 1299, "http://www.google.com", "ADF124", 10); //Producto, no se agrega porque se repite el CODE
addProduct("Producto 4", "el cuarto producto", 1899, "http://www.google.com", "ADF125", 10); //Producto
addProduct("Producto 5", "el quinto producto", 8999, "http://www.google.com", "ADF125"); //Producto sin stock, sale la leyenda que falta un campo

//getProducts(); //muestra el array de los productos

getProductById(4); //muestra el producto con el ID indicado si existe