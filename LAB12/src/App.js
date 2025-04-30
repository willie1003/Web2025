import React from 'react';
import { MultiButton, IconMultiButton } from './cgu_multiButton';
import HelloCGU from './cgu_hello';

function App() {
  return (
    <div>
      <HelloCGU />
      <MultiButton num={5} />
      <IconMultiButton />
    </div>
  );
}

export default App;
