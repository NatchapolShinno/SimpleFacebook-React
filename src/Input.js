import React from "react";
import PropTypes from 'prop-types'

function Input({addPost}) {
  return (
    <div className="Input">
      <div className="Input__header">Create Post</div>
      <input className="Input__field" type="text" />
    </div>
  );
}

Input.PropTypes = {
    addPost: PropTypes.func.isRequired
};

export default Input;
