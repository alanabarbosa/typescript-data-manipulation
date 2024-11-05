const moedaParaNumero = (moeda) => {
    const numero = Number(moeda.replaceAll(".", "").replaceAll(",", "."));
    return isNaN(numero) ? null : numero;
};
export default moedaParaNumero;
//# sourceMappingURL=moedaParaNumero.js.map