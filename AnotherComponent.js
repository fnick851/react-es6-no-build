import { html, React } from "./deps.js";
const useState = React.useState;

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
