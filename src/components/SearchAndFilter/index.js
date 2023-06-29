import {
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import React from "react";
import { CATEGORY } from "../../container/HomePage/constants";

const SearchAndFilter = ({
    searchKeyword,
    setSearchKeyword,
    category,
    setCategory,
}) => {
    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                columnGap: 2,
                width: "100%",
                padding: 0,
            }}
        >
            <TextField
                sx={{ backgroundColor: "#fff", width: "100%" }}
                type="search"
                id="search"
                label="Search"
                value={searchKeyword}
                onChange={(e) => {
                    setSearchKeyword(e.target.value);
                }}
            />
            <FormControl sx={{ width: "100%", backgroundColor: "#fff" }}>
                <InputLabel id="demo-simple-select-error-label">
                    Category
                </InputLabel>
                <Select
                    labelId="demo-simple-select-error-label"
                    id="demo-simple-select-error"
                    value={category}
                    label="Category"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {["ALL", ...CATEGORY].map((it) => {
                        return (
                            <MenuItem value={it} key={it}>
                                {it}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </Container>
    );
};

export default SearchAndFilter;
