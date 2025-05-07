// import React from 'react';
// import { MultiButton, IconMultiButton } from './cgu_multiButton';
// import HelloCGU from './cgu_hello';

// function App() {
//   return (
//     <div>
//       <HelloCGU />
//       <MultiButton num={5} />
//       <IconMultiButton />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import SignInSide from './cgu_login'; // ✅ 引入你的登入畫面元件

function App() {
  return (
    <div>
      <SignInSide />
    </div>
  );
}

export default App;
