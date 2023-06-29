import { TYPES } from "./constants";

export const getRecentFour = (transactions = []) => {
    return transactions.reverse().slice(0, 4);
};

export const getOverallReport = (transactions = []) => {
    const initialReport = { income: 0, expense: 0 };
    const report = transactions.reduce((acc, cur) => {
        if (cur.type === TYPES.INCOME) {
            const _income = Number(acc.income) + Number(cur.amount);
            return { ...acc, income: _income };
        } else {
            const _expense = Number(acc.expense) + Number(cur.amount);
            return { ...acc, expense: _expense };
        }
    }, initialReport);
    return report;
};

export const withSearchAndFilter = (
    transactions = [],
    searchKeyword = "",
    category = "ALL"
) => {
    return transactions
        .filter((it) => {
            return category === "ALL" || category === ""
                ? true
                : it.category === category;
        })
        .filter((it) => {
            const textToBeSearched = `${it.category} ${it.description}`;
            return textToBeSearched
                .toLocaleLowerCase()
                .includes(searchKeyword.toLocaleLowerCase());
        });
};
