import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthStateContext } from "../auth";
import Button from "../Components/Button";
import RequiresAuth from "../Components/RequiresAuth";
import { createNewSession } from "../services/firestore";
import { styled } from "../stitches";

const StartWrapper = styled("div", {
  paddingTop: "30vh",
  paddingBottom: 100,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Title = styled("h1", {
  color: "$amber11",
  marginBottom: 20,
});

const Text = styled("span", {
  color: "$grass11",
  margin: "0px 10px",
});

const ButtonWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const StartPage = () => {
  const { user } = useContext(AuthStateContext);
  const navigate = useNavigate();
  const newSession = async () => {
    if (!user) {
      console.log("No user");
      return;
    }
    const sessionId = await createNewSession(user.uid);
    navigate("/session/" + sessionId);
  };
  return (
    <RequiresAuth>
      <StartWrapper>
        <Title>Estimator</Title>
        <ButtonWrapper>
          <Button onClick={newSession}>New Session</Button>
          <Text>or</Text>
          <Button>Join Session</Button>
        </ButtonWrapper>
      </StartWrapper>
    </RequiresAuth>
  );
};

export default StartPage;
