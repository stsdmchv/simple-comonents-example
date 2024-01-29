import App from "./App";
import ReactDOM from 'react-dom'
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "consolas",sans-serif;
  font-size: 20px;
}`

ReactDOM.render(
    <>
        <Global />
        <App />,
    </>,
    document.getElementById('root')
);