import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  render() {
    const text = this.context === 'english' ? 'Name' : 'Name';
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

Field.contextType = LanguageContext;

export default Field;