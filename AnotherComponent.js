import html from "./jsx.js";
import { useState } from "https://unpkg.com/es-react@latest/dev/react.js";

const AnotherComponent = ({ message }) => {
  const [count, setCount] = useState(0);

  return html`
    <div>
      <h2>This is another component!</h2>
      <p>${message}</p>
      <p>Count: ${count}</p>
      <div>
        <button onClick=${() => setCount(count + 1)}>Add One</button>
      </div>
    </div>
  `;
};

export default AnotherComponent;
