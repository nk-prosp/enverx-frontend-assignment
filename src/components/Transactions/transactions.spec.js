import { screen, render } from "@testing-library/react";
import Transactions from ".";
import transactionService from "../../services/transactionService";

jest.mock("../../services/transactionService");

const transactions = [
    {
        id: 45678,
        amount: 10000,
        description: "this for testing purpose!",
        type: "income",
        category: "SALARY",
        createdAt: 1687969548000,
    },
    {
        id: 45679,
        amount: 10000,
        description: "this for testing purpose!",
        type: "expense",
        category: "GROCERIES",
        createdAt: 1687969548000,
    },
    {
        id: 45680,
        amount: 10000,
        description: "this for testing purpose!",
        type: "expense",
        category: "RENT",
        createdAt: 1687969548000,
    },
];

describe("transactions list", () => {
    it("should have exact number of items", async () => {
        transactionService.getTransactions.mockResolvedValue({
            data: transactions,
        });
        const transactions_ = await transactionService.getTransactions();
        render(<Transactions items={transactions_.data} />);
        const listItem = await screen.findAllByTestId("transaction");
        expect(listItem).toHaveLength(3);
    });
});
