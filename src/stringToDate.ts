const stringToDate = (texto: string): Date => {
    const [data, tempo] = texto.split(" ");
    const [dia, mes, ano] = data.split("/").map(Number);
    const [hora, minuto] = tempo.split(":").map(Number);
    console.log(new Date(ano, mes - 1, dia, hora, minuto))
    return new Date(ano, mes - 1, dia, hora, minuto);
}

export default stringToDate;