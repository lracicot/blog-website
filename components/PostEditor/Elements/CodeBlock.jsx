/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import oneDark from "../slate-code/prism/themes/one-dark";
import { forwardRef } from "react";

import PropTypes from "prop-types";

const CodeBlock = forwardRef(function CodeBlock(
  { children, ...attributes },
  ref
) {
  return (
    <pre
      ref={ref}
      css={css`
        ${oneDark['pre[class*="language-"]']}
      `}
    >
      <code
        {...attributes}
        css={css`
          ${oneDark['code[class*="language-"]']}
        `}
      >
        {children}
      </code>
    </pre>
  );
});

CodeBlock.propTypes = {
  attributes: PropTypes.any,
  children: PropTypes.any
};

export default CodeBlock;
