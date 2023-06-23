import { useState } from "react";
import { getGitHubUser } from "../services";

const useInitialState = () => {
  const [inputUser, setInputUser] = useState("octocat");
  const [userState, setUserState] = useState(inputUser);
  const [loading, setLoading] = useState(true);

  const getDataUser = async (user) => {
    const userResponse = await getGitHubUser(user);

    if (userState === "octocat") {
      localStorage.setItem("octocat", JSON.stringify(userResponse));
    }

    if (userResponse.message === "Not Found") {
      const octocat = JSON.parse(localStorage.getItem("octocat"));
      setUserState(octocat);
    } else {
      setUserState(userResponse);
    }

    setLoading(false);
  };

  return {
    userState,
    inputUser,
    setInputUser,
    getDataUser,
    loading,
  };
};

export default useInitialState;
