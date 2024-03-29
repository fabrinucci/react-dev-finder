import { useContext, useEffect } from "react";
import { Container, Link, Typography } from "@mui/material";
import { AppContext } from "../context";
import { Searcher } from "../components";
import { UserCard } from "../containers";
import { Loading } from "../components/Loading";

export const MainPage = () => {
  const { inputUser, getDataUser, loading } = useContext(AppContext);

  useEffect(() => {
    getDataUser(inputUser);
  }, [inputUser]);

  return (
    <div className="background">
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
          {loading ? <Loading /> : <UserCard />}
        </Container>
      </main>
      <footer>
        <Typography variant="h6">
          Make by{" "}
          <Link
            href="https://github.com/fabrinucci"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            <Typography
              sx={{
                display: "inline",
              }}
            >
              @fabrinucci
            </Typography>
          </Link>
        </Typography>
      </footer>
    </div>
  );
};
