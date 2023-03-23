import ContainerPresentational from 'patterns/design/container-presentational';
import HOC from 'patterns/design/hoc';
import Hook from 'patterns/design/hook';
import Module from 'patterns/design/module';
import Observer from 'patterns/design/observer';
import Prototype from 'patterns/design/prototype';
import Dog from 'patterns/design/prototype/components/dog';
import RenderProps from 'patterns/design/render-props';
import React from 'react';
import './App.css';
import Provider from './patterns/design/provider';
import Proxy from './patterns/design/proxy';
import { Singleton } from './patterns/design/singleton';

function App() {

  return (
    <div className="App" id="App">
      <header className="App-header">
        <section><h1>Design Patterns</h1></section>
        <section></section>
        <section></section>
        {/* <Singleton /> */}

        {/* <Proxy /> */}
        {/* <Provider /> */}
        {/* <Prototype /> */}
        {/* <ContainerPresentational /> */}
        {/* <Observer /> */}
        {/* <Module /> */}
        {/* <HOC /> */}
        {/* <RenderProps /> */}
        <Hook />
      </header>
    </div>
  );
}

export default App;
