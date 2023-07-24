import { css } from "@emotion/react";

const styles = css`
  border: 1px solid currentColor;
  border-radius: 2rem;
  list-style-type: none;
`;

export const Component = () => <li css={styles}>This is a component</li>;
