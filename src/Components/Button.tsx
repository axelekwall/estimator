import { styled } from "../stitches";

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

export default Button;
