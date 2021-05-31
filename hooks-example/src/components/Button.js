import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  // hook up language context to class component
  // must be called: contextType
  // static contextType = LanguageContext;

  _renderSubmit(value) {
    return value === 'english' ? 'Submit' : "Einreichen";
  }

  render() {
    // const text = this.context === 'english' ? 'Submit' : 'Einreichen';

    // context consuming example below, good for using multiple contexts
    return (
      <button className="ui primary">
        <LanguageContext.Consumer>
          {(value) => this._renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}
// Can also declare the context type for the class like this
// Button.contextType = LanguageContext;

export default Button;