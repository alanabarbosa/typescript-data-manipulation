import Estatisticas from "./Estatisticas.js";
import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizarTransacao.js";
const handleData = async () => {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json?");
    if (!data)
        return;
    const transacoes = data.map(normalizarTransacao);
    preencherTabela(transacoes);
    preencherEstatisitcas(transacoes);
};
function preencherLista(lista, containerId) {
    const containerElement = document.getElementById(containerId);
    if (containerElement)
        Object.keys(lista).forEach((key) => containerElement.innerHTML += `<p>${key}: ${lista[key]}</p>`);
}
const preencherEstatisitcas = (transacoes) => {
    const data = new Estatisticas(transacoes);
    preencherLista(data.pagamento, "pagamento");
    preencherLista(data.status, "status");
    const totalElement = document.querySelector("#total span");
    if (totalElement) {
        totalElement.innerText = `R$ ${data.total.toLocaleString('pt-BR', { style: "currency",
            currency: "BRL"
        })}
        `;
    }
    const diaElement = document.querySelector("#dia span");
    if (diaElement)
        diaElement.innerText = data.melhorDia[0];
};
const preencherTabela = (transacoes) => {
    const tabela = document.querySelector("#transacoes tbody");
    if (!tabela)
        return;
    transacoes.forEach(transacao => {
        tabela.innerHTML += `
            <tr>
                <td>${transacao.nome}</td>
                <td>${transacao.email}</td>
                <td>R$ ${transacao.moeda}</td>
                <td>${transacao.pagamento}</td>
                <td>${transacao.status}</td>
            </tr>
        `;
    });
};
handleData();
//# sourceMappingURL=script.js.map