alert("Bienvenido a katys beauty!");


let tratamiento = parseInt(prompt(`eliga el tipo de tratamiento que deseas realizarte:
1-Dermapen 25000$
2-Limpieza facial  30000$
3-Acido Hialuronico 40000$
4-Masaje relajante 55000$`));


if (tratamiento === 1) {
    tratamiento = 25000
} else if (tratamiento === 2) {
    tratamiento = 30000
} else if (tratamiento === 3) {
    tratamiento = 40000
}else if (tratamiento === 4) {
    tratamiento = 55000
}

const calcularIva = 0.19; {
    let total = tratamiento * calcularIva;
    alert(`El precio total con iva es de: $ ` + total);
}
alert("Muchas gracias por visitar Katys beuaty");