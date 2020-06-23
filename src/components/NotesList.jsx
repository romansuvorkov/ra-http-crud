import React from 'react';
import Note from './Note';

function NotesList(props) {

  const {item, onDelete} = props;

  return (
    <div className="notes_list_wraper">
      {item.map(o => <Note {...o} key={o.id} onDelete={onDelete} />)}
    </div>
  );
}

export default NotesList;