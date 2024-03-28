import { lazy, useState } from "react";
import "./App.css";
const App = lazy(() => import('ideaApp/App'))

// import Button from "remoteApp/Button";
// import {App} from "ideaApp/App"
// import useStore from "remoteApp/store";

function Apps() {
  // const [count, setCount] = useStore();

  return (
    <>
      {/* <div className="App">
        <h1>Host Application</h1>
        <Button />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div> */}
      <App />
    </>
  );
}

export default App;
