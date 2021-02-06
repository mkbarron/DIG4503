/* 
The "App.js" file should:
    - Not contain the default text or styles
    - Import HomePage
    - Pass as an attribute firstName with your first name 
    */

import React from 'react';
import HomePage from './components/homepage'

function App() {
  const firstname = 'Michelle';
  return (
    <HomePage firstName={firstname} />
  )
}

export default App;