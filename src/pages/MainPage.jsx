import { useContext, useEffect } from "react";
import { Box, Container } from "@mui/material";
import { AppContext } from "../context";
import { Searcher } from "../components";
import { UserCard } from "../containers";

export const MainPage = () => {
  const { inputUser, getDataUser } = useContext(AppContext);

  useEffect(() => {
    getDataUser(inputUser);
  }, [inputUser]);

  return (
    <main
      style={{
        position: "relative",
        backgroundColor: "rgba(56, 17, 94, 0.841)",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('/bg.webp')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.5,
          zIndex: -1,
        }}
      ></Box>
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
