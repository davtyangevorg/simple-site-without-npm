// app.js

import { Button } from "./button/index.js";
import { getUserData } from "./helpers/index.js";

const App = () => {
  const getUserDataAsync = async () => {
    const data = await getUserData();
    console.log("data", data);
  };

  React.useEffect(() => {
    getUserDataAsync();
  }, []);

  React.useEffect(() => {
    // Example usage of Atomics.waitAsync
    console.log("result", Atomics.waitAsync);
  }, []);

  return React.createElement(
    "div",
    null,
    React.createElement(Button, null),
    "Hello, React!"
  );
};

export default App;
