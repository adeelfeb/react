import { useState } from 'react';
import config from './config/config';



function App() {
  const [count, setCount] = useState(0);
  console.log(config.appwriteCollectionId)

  return (
    <>
      <h1 className="font-bold">This is just !!@{config.appwriteBucketId} </h1>
      
    </>
  );
}

export default App;
