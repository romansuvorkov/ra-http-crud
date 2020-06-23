import React, { Component } from 'react';
import GetButton from './GetButton';
import NotesList from './NotesList';
import NoteInput from './NoteInput';

export default class Notes extends Component {

  state = {
    notes: []
  }

  componentDidMount = () => this.loadFromServer();

  loadFromServer = () => {
    console.log('work load');
    fetch(process.env.REACT_APP_NOTES_URL)
    .then(response => response.json())
    .then(notes => this.setState({ notes }))
  }

  deleteFromServer = (id) => {
    fetch(`${process.env.REACT_APP_NOTES_URL}/${id}`, { method: 'DELETE' })
    .then(() => this.loadFromServer())
  }

  addToServer = (text) => {
    fetch(process.env.REACT_APP_NOTES_URL, {
      method: 'POST',
      body:  text
    }).then(() => this.loadFromServer())
  }

  render() {
    return (
      <div className="notes">
        <GetButton onGet={this.loadFromServer} />
        <NotesList item={this.state.notes} onDelete={this.deleteFromServer} />
        <NoteInput onAdd={this.addToServer} />
      </div>
    );    
  }



}

