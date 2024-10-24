import { useState } from 'react';

function App() {
  console.log("The website is running now")

  return (
    <>
      <h1 className="font-bold">This is !!@ {import.meta.env.VITE_APPWRITE_URL}</h1>
    </>
  );
}

export default App;
