const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok)
            throw new Error("Erro: " + response.status);
        const json = await response.json();
        return json;
    }
    catch (err) {
        if (err instanceof Error)
            console.error("fetchData: " + err.message);
        return null;
    }
};
export default fetchData;
//# sourceMappingURL=fetchData.js.map