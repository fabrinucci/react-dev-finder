import { useContext, useState } from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AppContext } from "../context";

export const Searcher = () => {
  const { setInputUser } = useContext(AppContext);

  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputUser(inputValue);
    setInputValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        position: "relative",
        width: "80%",
      }}
    >
      <Stack
        direction="row"
        sx={{
          marginTop: "30px",
        }}
      >
        <TextField
          value={inputValue}
          onChange={onInputChange}
          id="outlined-basic"
          label="GitHub user"
          variant="outlined"
          autoComplete="off"
          placeholder="Octocat"
          size="small"
          sx={{
            width: "100%",
          }}
        />
        <IconButton
          type="submit"
          size="small"
          aria-label="search"
          color="primary"
          sx={{
            position: "absolute",
            top: "34px",
            right: {
              xs: "0",
              md: "5px",
            },
            // right: "0",
          }}
        >
          <SearchIcon />
        </IconButton>
      </Stack>
    </form>
  );
};
