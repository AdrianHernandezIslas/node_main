module.exports = (() => {

    const {sumar} = require("../middleware/AritmeticaMiddelware");

    const addNumber = (req,res) => {
        const {params} = req;
        const {numberA,numberB} = params;
        const resultado = sumar(numberA,numberB);
        res.status(suma in resultado?200:422).json(resultado);
    };

    const subNumber = (req,res) => {
        res.send("Soy controlador Number -> subNumber");
    };

    return{
        addNumber,
        subNumber
    };
})();