/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useFocused, useSelected } from "slate-react";

import PropTypes from "prop-types";

const ImageElement = ({ attributes, children, element }) => {
  const selected = useSelected();
  const focused = useFocused();
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <img
          src={element.url}
          alt={element.url}
          css={css`
            display: block;
            max-width: 100%;
            box-shadow: ${selected && focused ? "0 0 0 3px #B4D5FF" : "none"};
          `}
        />
      </div>
      {children}
    </div>
  );
};

ImageElement.propTypes = {
  attributes: PropTypes.any,
  children: PropTypes.any,
  element: PropTypes.any
};

export default ImageElement;
