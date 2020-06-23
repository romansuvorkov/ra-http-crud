import React from 'react';

function GetButton(props) {

  const { onGet } = props;

  return (
    <div className="button_wraper">
      <span className="notes_header">Notes</span>
      <button className="refresh" onClick={onGet}>&#8635;</button>
    </div>
  );
}

export default GetButton;