import { globalStyles, styled } from "../stitches";

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

const Button = styled("button", {
  borderRadius: 4,
  backgroundColor: "$grass4",
  padding: "8px 12px",
  color: "$grass11",
  borderWidth: 1,
  borderColor: "$grass4",
  "&:hover": {
    borderColor: "$grass11",
  },
});

const StartPage = () => {
  return (
    <StartWrapper>
      <Title>Estimator</Title>
      <ButtonWrapper>
        <Button>New Session</Button>
        <Text>or</Text>
        <Button>Join Session</Button>
      </ButtonWrapper>
    </StartWrapper>
  );
};

export default StartPage;
