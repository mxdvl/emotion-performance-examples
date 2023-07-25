import { css } from "@emotion/react";
import createCache from "@emotion/cache";
import { colors, weights } from "./values";
import { inject } from "./inject";

const cache = createCache({ key: "inline" });

export const Component = ({
  color,
  weight,
}: {
  color: string;
  weight: number;
}) => (
  <li
    css={css`
      font-weight: ${weight};
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
          <Component
            key={i}
            color={colors[i % colors.length]}
            weight={weights[i % weights.length]}
          ></Component>
        ))}
      </ul>
    </>
  );
};

inject(cache, App);
