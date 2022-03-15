import React, { lazy, Suspense } from 'react';
const Loading = lazy(() => import('./Components/Loading'));

function App() {
  return (
    
      <div className=" w-screen h-screen bg-slate-200">
        <Suspense fallback={<Loading/>}>
          Hello
        </Suspense>
          </div>
   
  );
}

export default App;
