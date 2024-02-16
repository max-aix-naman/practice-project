import React, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TablePagination from "@mui/material/TablePagination";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Todo from "./Todo";
import "./Todo.css";

const TodoPage = ({ todos }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const theme = createTheme({
    typography: {
      fontFamily: "Aleo",
    },
  });

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedTodos = filteredTodos.slice(startIndex, endIndex);

  return (
    <Fragment>
      <div className="search-container">
        <ThemeProvider theme={theme}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
              fontFamily: "Aleo",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="filled-basic"
              label="Search your todo"
              variant="filled"
              type="text"
              value={searchTerm}
              size="small"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Box>

          <TablePagination
            count={filteredTodos.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
              borderBottom: "none",
            }}
          />
        </ThemeProvider>
      </div>
      <div className="todo-grid">
        {displayedTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </Fragment>
  );
};

export default TodoPage;
