import { grassDark, oliveDark, amberDark } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      ...grassDark,
      ...oliveDark,
      ...amberDark,
    },
  },
});

const globalStyles = globalCss({
  body: {
    backgroundColor: "$grass1",
    fontFamily: "Inter, sans-serif",
  },
  button: { borderStyle: "solid", borderWidth: 0 },
});

export { styled, globalStyles };
