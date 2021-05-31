import React, { useEffect, useState } from 'react';
import UserCreate from './components/UserCreate';
import LanguageContext from './contexts/LanguageContext';

const App = () => {
  const [language, setLanguage] = useState('english');

  // the same as "componentDidMount" 
  useEffect(() => {    
  }, [language]);

  // functions in hooks
  const _onLanguageChange = language => {
    setLanguage(language);
  };

  return (
    <div className="ui container">
      <div>
        Select a language:
        <i className="flag us" onClick={() => _onLanguageChange('english')}/>
        <i className="flag de" onClick={() => _onLanguageChange('german')}/>
      </div>
      {/* value is a keyword */}
      <LanguageContext.Provider value={language}>
        <UserCreate />
      </LanguageContext.Provider>
    </div>      
  );
};

export default App;
