import { css } from "@emotion/react";
import "./app.css";
import { render } from "react-dom";
import { colors } from "./colors";

const sharedStyles = css`
  border: 1px solid currentColor;
  border-radius: 2rem;
  list-style-type: none;
`;

export const Component = ({ color }: { color: string }) => (
  <li
    css={[
      sharedStyles,
      css`
        color: ${color};
      `,
    ]}
  >
    {color}
  </li>
);

const App = () => {
  return (
    <>
      <ul
        css={css`
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          grid-gap: 0.25rem;
        `}
      >
        {Array.from({ length: 10_000 }, (_, i) => (
          <Component key={i} color={colors[i % colors.length]}></Component>
        ))}
      </ul>
    </>
  );
};

render(<App />, document.getElementById("app")!);
