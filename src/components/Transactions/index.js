import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { TYPES } from "../../container/HomePage/constants";
import { Divider } from "@mui/material";
import { getFormattedDate } from "../../utils/dateTime";

export default function Transactions({ items = [] }) {
    return (
        <List sx={{ width: "100%", bgColor: "background.paper" }}>
            {items.map((it) => {
                return (
                    <React.Fragment key={it.id}>
                        <ListItem
                            alignItems="flex-start"
                            data-testid="transaction"
                        >
                            <ListItemText
                                primary={it.category}
                                secondary={
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {it.description}
                                    </Typography>
                                }
                            />
                            <ListItemText
                                sx={{
                                    textAlign: "right",
                                }}
                                primary={`${
                                    it.type === TYPES.INCOME ? "+" : "-"
                                } ${it.amount}`}
                                secondary={
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {getFormattedDate(it.createdAt)}
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <Divider component="li" />
                    </React.Fragment>
                );
            })}
        </List>
    );
}
