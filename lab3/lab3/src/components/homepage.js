/* 
- Create a new folder called "components" and create a new file within the components folder called "homepage.js"

- Add a new component, HomePage that extends React.Component.

- HomePage should display the property firstName as part of its render() function using JSX
*/

import React from 'react';

class HomePage extends React.Component { 

  render(firstname) { 
    return <p>{this.props.firstName}</p>; 
  }
}

export default HomePage; 