module.exports = (() => {
  const sumar = (numeroA = 0, numeroB = 0) => {
    var response = {};
    if (!isNaN(numberA) && !isNaN(numberB)) {
      const numeroA = parseInt(numberA);
      const numeroB = parseInt(numberB);
      const suma = numeroA + numeroB;
      response = { suma };
    } else {
      response = { error: "Los valores no son validos" };
    }
    return response;
  };

  return {
    sumar,
  };
})();
