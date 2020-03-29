import React from "react";

import PropTypes from "prop-types";

import CodeBlock from "./CodeBlock";
import ImageElement from "./ImageElement";

const Element = props => {
  const { attributes, children, element } = props;

  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    case "code-block":
      return <CodeBlock {...attributes}>{children}</CodeBlock>;
    case "image":
      return <ImageElement {...props} />;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

Element.propTypes = {
  attributes: PropTypes.any,
  children: PropTypes.any,
  element: PropTypes.any
};

export default Element;
