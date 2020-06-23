import React from 'react';

function Note(props) {

  const handleRemove = (event) => {
    props.onDelete(event.target.dataset.id);
  }


  return (
    <div className="notes_item_wraper">
      <span className='delete' data-id={props.id} onClick={handleRemove}>&#10006;</span>
      <span className='note_text'>{props.content}</span>
    </div>
  );
}

export default Note;