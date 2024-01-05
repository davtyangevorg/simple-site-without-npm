// script.js
import App from "./react-components/app.js";

$(document).ready(function () {
  $("#clickMe1").click(function () {
    $("#message1").text("You clicked the button!");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("clickMe");
  const message = document.getElementById("message");
  button.addEventListener("click", function () {
    if (!message.innerHTML) {
      message.innerHTML = "You clicked the button!";
    } else {
      message.innerHTML = "";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const rootNode = document.getElementById("root");
  ReactDOM.render(React.createElement(App, null), rootNode);
});

const App = () => <h1>vardan </h1>;
ReactDOM.render(<App />, document.getElementById("root"));

