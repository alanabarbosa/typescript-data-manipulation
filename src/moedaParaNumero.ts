const moedaParaNumero = (moeda: string): number | null => {    
    const numero = Number(moeda.replaceAll(".", "").replaceAll(",", "."));
    return isNaN(numero) ? null : numero;
}

export default moedaParaNumero;