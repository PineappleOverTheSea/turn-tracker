import App from "./components/App"
import "./styles/index.scss"

import { createRoot } from 'react-dom/client';
const container = document.querySelector("#root");
const root = createRoot(container!); 
root.render(<App/>);