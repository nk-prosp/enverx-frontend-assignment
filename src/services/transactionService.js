import { addTransaction, getTransactions } from "../utils/firestore";

const transactionService = {
    getTransactions: async () => {
        const results = await getTransactions();
        return { data: results };
    },
    addTransaction: async (data) => {
        await addTransaction(data);
        return { data };
    },
};

export default transactionService;
