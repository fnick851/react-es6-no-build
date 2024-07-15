import AnotherComponent from "./AnotherComponent.js";
import { html } from "./deps.js";

const App = () => {
  const message = "Passed from App component!";
  return html`
    <div>
      <h1>Hello, React with ES6 Modules!</h1>
      <p>This setup uses React and ReactDOM from a CDN with ES6 modules.</p>
      <${AnotherComponent} message=${message} />
    </div>
  `;
};

export default App;
