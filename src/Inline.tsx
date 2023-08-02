import { css } from "@emotion/react";
import createCache from "@emotion/cache";
import { colors } from "./values";
import { inject } from "./inject";

const cache = createCache({ key: "inline" });

export const Component = ({ color }: { color: string }) => (
  <li
    css={css`
      color: ${color};
      border: 1px solid currentColor;
      border-radius: 2rem;
      list-style-type: none;
    `}
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

inject(cache, App);
