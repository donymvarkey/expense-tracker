import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import ButtonAppBar from "../components/Appbar";
import DatagridComponent from "../components/DatagridComponent";
import DialogComponent from "../components/DialogComponent";
import { expenses } from "../data";

const Home = () => {
  return (
    <div>
      <ButtonAppBar />
      <Box sx={{ p: 2 }}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h5" gutterBottom>
            Add new Expense
          </Typography>
          <DialogComponent />
        </Paper>
      </Box>

      <Box sx={{ p: 2 }}>
        <Paper sx={{ p: 2, height: 800 }} component="div">
          <DatagridComponent expenses={expenses} />
        </Paper>
      </Box>
    </div>
  );
};

export default Home;
