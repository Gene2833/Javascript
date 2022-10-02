alert("Bienvenidos a Katys Beuaty!");

class productos {
    constructor(id,nombre,precio) {
        this.id=id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

let producto1 = new productos(1, "Limpieza Facial",25000)
let producto2 = new productos(2,"Dermapen",20000)
let producto3 = new productos(3,"Masajes relajantes",15000)
let producto4 = new productos(4,"Masajes reductores",30000)

let ListaDeProductos = [producto1,producto2,producto3,producto4,]


const mostrarProductos = () => {
    let mensaje = "eliga el tipo de tratamiento que deseas realizarte:"
    ListaDeProductos.forEach(ListaDeProductos => {
        mensaje += `
            Opción ${ListaDeProductos.id}: ${ListaDeProductos.nombre}  - $${ListaDeProductos.precio}`
    })
    mensaje += `
        Opción 0: No comprar nada`
    let opcion = Number(prompt(mensaje))

    return opcion;
}

let comprar = true;

while (comprar) {
    let opcion = mostrarProductos()

    if (opcion === 1) {
        ListaDeProductos.precio = 25000
    } else if (opcion === 2) {
        ListaDeProductos.precio = 20000
    } else if (opcion === 3) {
        ListaDeProductos.precio = 15000
    }else if (opcion === 4) {
        ListaDeProductos.precio = 30000
    }else if(opcion === 0){
        alert("Gracias por visitarnos")
        break;
    }
}


function Calculadora(){
const calcularIva = 0.19;
let total = tratamiento * calcularIva;
alert(`El precio total con iva es de: $ ` + total);
}

Calculadora()

alert("Gracias por tu visita a Katys beauty")