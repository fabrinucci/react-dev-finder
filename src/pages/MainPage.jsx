import { useContext, useEffect } from "react";
import { Container } from "@mui/material";
import { AppContext } from "../context";
import { Searcher } from "../components";
import { UserCard } from "../containers";

export const MainPage = () => {
  const { inputUser, getDataUser } = useContext(AppContext);

  useEffect(() => {
    getDataUser(inputUser);
  }, [inputUser]);

  return (
    <main>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Searcher />
        <UserCard />
      </Container>
    </main>
  );
};
