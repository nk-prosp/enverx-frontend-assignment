import { transactions } from "../dummyData";

const transactionService = {
    getTransactions: async () => {
        return { data: transactions };
    },
    addTransaction: async (data) => {
        return { data: data };
    },
};

export default transactionService;
