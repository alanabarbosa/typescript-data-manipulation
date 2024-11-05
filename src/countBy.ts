export interface CountList {
    [key: string]: number
}

const countBy = (arr: (string | number)[]) => {
    return arr.reduce((acc: CountList, item) => {
        if (acc[item]) {
            acc[item] += 1;
        } else {
            acc[item] = 1;
        }
        return acc;
    }, {});
};

export default countBy;