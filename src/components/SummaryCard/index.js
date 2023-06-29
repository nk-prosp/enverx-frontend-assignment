import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard({ amount, title, testId }) {
    return (
        <Card sx={{ maxWidth: 275, minWidth: 120 }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {title}
                </Typography>
                <Typography
                    variant="h5"
                    component="div"
                    data-testid={testId}
                    inputProps={{
                        "data-testid": testId,
                    }}
                >
                    {amount}
                </Typography>
            </CardContent>
        </Card>
    );
}
