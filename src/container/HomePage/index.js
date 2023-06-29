import React, { useEffect } from "react";
import { HomePageWrapper } from "./index.styled";
import BasicCard from "../../components/SummaryCard";
import AddTransactionForm from "../../components/TransactionForm";
import { useSelector, useDispatch } from "react-redux";
import { SAGA_ACTIONS } from "./store/saga";
import { Box } from "@mui/material";
import { getOverallReport, getRecentFour, withSearchAndFilter } from "./utils";
import Transactions from "../../components/Transactions";
import SearchAndFilter from "../../components/SearchAndFilter";
import { setCategory, setSearchKey } from "./store/filterSlice";

const HomePage = () => {
    const { value, error } = useSelector((state) => state.transactions);
    const { category, searchKey } = useSelector((state) => state.filter);
    const report = getOverallReport(value);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: SAGA_ACTIONS.FETCH_TRANSACTION_ASYNC,
        });
    }, []);
    
    const handleSubmit = (data) => {
        dispatch({
            type: SAGA_ACTIONS.ADD_TRANSACTION_ASYNC,
            transaction: data,
        });
    };

    const getRecentTransactions = (value, searchKey, category) => {
        return getRecentFour(withSearchAndFilter(value, searchKey, category));
    };

    return (
        <HomePageWrapper>
            <div className="content">
                <Box
                    sx={{
                        display: "flex",
                        columnGap: 4,
                        justifyContent: "space-between",
                        mb: 4,
                    }}
                >
                    <BasicCard
                        title="Total Income"
                        amount={report.income}
                        testId="total-income"
                    />
                    <BasicCard
                        title="Total Expense"
                        amount={report.expense}
                        testId="total-expense"
                    />
                    <BasicCard
                        title={
                            report.income - report.expense > 0
                                ? "Available"
                                : "Dues"
                        }
                        amount={Math.abs(report.income - report.expense)}
                        testId="available-due"
                    />
                </Box>
                <SearchAndFilter
                    category={category}
                    setCategory={(value) => dispatch(setCategory(value))}
                    searchKeyword={searchKey}
                    setSearchKeyword={(value) => dispatch(setSearchKey(value))}
                />
                <Transactions
                    items={getRecentTransactions(value, searchKey, category)}
                />
                <AddTransactionForm onSubmit={handleSubmit} />
            </div>
        </HomePageWrapper>
    );
};

export default HomePage;
