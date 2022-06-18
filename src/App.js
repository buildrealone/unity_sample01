import logo from './logo.svg';
import './App.css';
import React from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';

const unityContext = new UnityContext({
  loaderUrl: "Build/counter-webgl.loader.js",
  dataUrl: "Build/counter-webgl.data",
  frameworkUrl: "Build/counter-webgl.framework.js",
  codeUrl: "Build/counter-webgl.wasm",
})

function App() {
  function Test() {
    unityContext.send("GameManager", "BtnClick");
  }
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <button onClick={() => Test()}>유니티 호출 버튼</button>
      <Unity 
      style={{ width: '90%', height: "100%", justifySelf: "center", alignSelf: "center" }}
      unityContext={unityContext} />
    </div>
  );
}

export default App;
