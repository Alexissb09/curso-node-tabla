const fs = require("fs");
const colors = require('colors')

const crearArchivo = async (base = 2, listar = false, hasta = 5) => {
  try {

    let salida = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${colors.yellow(base)} ${colors.bold('x')} ${colors.yellow(i)} = ${colors.red(base * i)}\n`
    }

    const nombreArchivo = `tabla-${base}`;

    fs.writeFileSync(`./salida/${nombreArchivo}.txt`, salida);

    if (listar) {
      console.log("=======================".green);
      console.log(`   Tabla del ${base}   `.rainbow)
      console.log("=======================".green);

      console.log(salida)
    }

    return `${nombreArchivo}.txt`.rainbow;
  } catch (err) {
    throw err;
  }
};

module.exports = { crearArchivo };
