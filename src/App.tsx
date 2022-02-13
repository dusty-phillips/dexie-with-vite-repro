import { useLiveQuery } from "dexie-react-hooks";

import logo from "./logo.svg";
import "./App.css";
import { useDexie } from "./database";

function App() {
  const db = useDexie();
  const counter = useLiveQuery(
    async () => await db.count.toCollection().last()
  );
  const count = counter ? counter.count : 0;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            type="button"
            onClick={() => {
              console.log("About to add");
              // This promise never resolves, catches, or finallys
              db.count
                .add({ count: count + 1 })
                .then((i) => console.log("Count Success", i))
                .catch((e) => console.log("Count failure", e))
                .finally(() => console.log("Count finally"));
            }}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
