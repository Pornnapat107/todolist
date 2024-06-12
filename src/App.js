import './App.css';
import Form from './components/Form';
import { Box } from "@mui/material";

function App() {
  return (
    <div className="wrapper">
      <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      >
        <Box maxWidth="1200px">
          <h1>Todo List</h1>
          <Form/>
        </Box>
      </Box>
    </div>
  );
}

export default App;
