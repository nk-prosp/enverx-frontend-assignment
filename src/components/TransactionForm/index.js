import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
    Button,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import { CATEGORY, TYPES } from "../../container/HomePage/constants";

export default function AddTransactionForm({ onSubmit }) {
    const [amount, setAmount] = useState("");
    const [amountError, setAmountError] = useState("");
    const [type, setType] = useState("");
    const [typeError, setTypeError] = useState("");
    const [category, setCategory] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [description, setDescription] = useState("");

    const submitData = () => {

        if (isNaN(amount) || amount === "") {
            setAmountError("Enter amount");
            return;
        } else {
            setAmountError("");
        }
        if (type === "") {
            setTypeError("Select Type");
            return;
        } else {
            setTypeError("");
        }
        if (category === "") {
            setCategoryError("Select Category");
            return;
        } else {
            setCategoryError("");
        }
        onSubmit({
            id: new Date().getTime(),
            amount,
            type,
            category,
            description,
            createdAt: new Date().getTime(),
        });

        // reset all values
        setAmount("");
        setType("");
        setCategory("");
        setDescription("");
    };

    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 0 },
                mt: 2,
            }}
            noValidate
            autoComplete="off"
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    columnGap: 16,
                }}
            >
                <FormControl sx={{ minWidth: 120 }} error={!!amountError}>
                    <TextField
                        inputProps={{
                            "data-testid": "form-amount",
                        }}
                        sx={{ backgroundColor: "#fff" }}
                        id="outlined-error-helper-text"
                        label="Amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    {amountError && (
                        <FormHelperText>{amountError}</FormHelperText>
                    )}
                </FormControl>
                <FormControl sx={{ minWidth: 120 }} error={!!typeError}>
                    <InputLabel id="demo-simple-select-error-label">
                        Type
                    </InputLabel>
                    <Select
                        inputProps={{
                            "data-testid": "form-type",
                        }}
                        sx={{ backgroundColor: "#fff" }}
                        labelId="demo-simple-select-error-label"
                        id="demo-simple-select-error"
                        value={type}
                        label="Type"
                        onChange={(e) => setType(e.target.value)}
                    >
                        <MenuItem value={TYPES.INCOME}>{TYPES.INCOME}</MenuItem>
                        <MenuItem value={TYPES.EXPENSE}>
                            {TYPES.EXPENSE}
                        </MenuItem>
                    </Select>
                    {typeError && <FormHelperText>{typeError}</FormHelperText>}
                </FormControl>
                <FormControl sx={{ minWidth: 120 }} error={!!categoryError}>
                    <InputLabel id="demo-simple-select-error-label">
                        Category
                    </InputLabel>
                    <Select
                        inputProps={{
                            "data-testid": "form-category",
                        }}
                        sx={{ backgroundColor: "#fff" }}
                        labelId="demo-simple-select-error-label"
                        id="demo-simple-select-error"
                        value={category}
                        label="Category"
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {CATEGORY.map((it) => {
                            return (
                                <MenuItem value={it} key={it}>
                                    {it}
                                </MenuItem>
                            );
                        })}
                    </Select>
                    {categoryError && (
                        <FormHelperText>{categoryError}</FormHelperText>
                    )}
                </FormControl>
            </div>
            <FormControl sx={{ width: "100%", mt: 2 }}>
                <TextField
                    inputProps={{
                        "data-testid": "form-description",
                    }}
                    sx={{ backgroundColor: "#fff" }}
                    id="outlined-error-helper-text"
                    label="Description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </FormControl>
            <Button
                data-testid="form-btn-add"
                sx={{ mt: 2 }}
                variant="contained"
                color="primary"
                onClick={() => submitData()}
            >
                Add
            </Button>
        </Box>
    );
}
