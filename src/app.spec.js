import { fireEvent, screen, render, act } from "@testing-library/react";
import App from "./App.js";
import transactionService from "./services/transactionService";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

jest.mock("./services/transactionService");

const AppWrapper = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

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

const newTransaction = {
    id: 45681,
    amount: 10000,
    description: "this for testing purpose!",
    type: "income",
    category: "SALARY",
    createdAt: 1687969548000,
};

describe("transactions list", () => {
    it("should have correct number of transactions", async () => {
        // mock implementation of service object's function
        transactionService.getTransactions.mockResolvedValue({
            data: transactions,
        });
        transactionService.addTransaction.mockResolvedValue({
            data: newTransaction,
        });

        // render complete app
        render(<AppWrapper />);

        // get all transaction element
        const listItem = await screen.findAllByTestId("transaction");
        expect(listItem).toHaveLength(3);
    });

    it("should have correct total income calculation", async () => {
        // mock implementation of service object's function
        transactionService.getTransactions.mockResolvedValue({
            data: transactions,
        });
        transactionService.addTransaction.mockResolvedValue({
            data: newTransaction,
        });

        // render complete app
        render(<AppWrapper />);
        // get all transaction element
        const incomeAmount = await screen.findByTestId("total-income");
        expect(incomeAmount).toHaveTextContent("10000");
    });

    it("should have correct expense income calculation", async () => {
        // mock implementation of service object's function
        transactionService.getTransactions.mockResolvedValue({
            data: transactions,
        });
        transactionService.addTransaction.mockResolvedValue({
            data: newTransaction,
        });

        // render complete app
        render(<AppWrapper />);
        // get all transaction element
        const expenseAmount = await screen.findByTestId("total-expense");
        expect(expenseAmount).toHaveTextContent("20000");
    });

    it("should changes overall income/expense calculation as per changes", async () => {
        // mock implementation of service object's function
        transactionService.getTransactions.mockResolvedValue({
            data: transactions,
        });
        transactionService.addTransaction.mockResolvedValue({
            data: newTransaction,
        });

        // render complete app
        render(<AppWrapper />);

        // get all transaction element
        const addButton = screen.getByTestId("form-btn-add");
        const amount = screen.getByTestId("form-amount");
        const type = screen.getByTestId("form-type");
        const category = screen.getByTestId("form-category");

        act(() => {
            // change value of input fields and verify
            fireEvent.change(amount, {
                target: { value: newTransaction.amount },
            });
            expect(amount).toHaveValue(newTransaction.amount);
            fireEvent.change(type, { target: { value: newTransaction.type } });
            expect(type).toHaveValue(newTransaction.type);
            fireEvent.change(category, {
                target: { value: newTransaction.category },
            });
            expect(category).toHaveValue(newTransaction.category);

            fireEvent.click(addButton);
        });

        const incomeAmount = await screen.findByTestId("total-income");
        expect(transactionService.addTransaction).toHaveBeenCalledTimes(1);
        // finally verify overall flow to add transaction is working fine
        expect(incomeAmount).toHaveTextContent("20000");
    });
});
