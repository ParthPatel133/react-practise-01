//----HIGHER ORDER COMPONENT-----------

import React from 'react';
import Man from './Man';
import Women from './Women';

const App = () => {
  return (
    <div>
      <Man handleGunShots />
      <Women />
    </div>
  )
}
export default App
