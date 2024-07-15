import React from "https://unpkg.com/es-react@latest/dev/react.js";
import AnotherComponent from "./AnotherComponent.js";
import htm from "https://unpkg.com/htm?module";

const html = htm.bind(React.createElement);

const App = () => {
  const message = "Hello from App component!";
  return html`
    <div>
      <h1>Hello, React with ES6 Modules!</h1>
      <p>This setup uses React and ReactDOM from a CDN with ES6 modules.</p>
      <${AnotherComponent} message=${message} />
    </div>
  `;
};

export default App;
