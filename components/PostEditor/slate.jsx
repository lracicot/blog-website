import { Editable, Slate, withReact } from "slate-react";
import { createEditor } from "slate";
import React, { useCallback, useMemo } from "react";

import PropTypes from "prop-types";

import { getCodeBlockDecorator, withCode } from "./slate-code";
import { withImage } from "./slate-image/with-image";
import Element from "./Elements/Element";
import Leaf from "./Elements/Leaf";

const PostEditor = ({ ...props }) => {
  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);
  const editor = useMemo(
    () => withCode(withImage(withReact(createEditor()))),
    []
  );
  const decorate = useCallback(getCodeBlockDecorator(editor), [editor]);

  return (
    <Slate editor={editor} value={props.value}>
      <Editable
        readOnly
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        decorate={decorate}
      />
    </Slate>
  );
};

PostEditor.propTypes = {
  value: PropTypes.any
};

export default PostEditor;
