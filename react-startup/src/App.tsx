import ContainerPresentational from 'patterns/design/container-presentational';
import Prototype from 'patterns/design/prototype';
import Dog from 'patterns/design/prototype/components/dog';
import React from 'react';
import './App.css';
import Provider from './patterns/design/provider';
import Proxy from './patterns/design/proxy';
import { Singleton } from './patterns/design/singleton';

function App() {



  return (
    <div className="App" id="App">
      <header className="App-header">
        <section>Design Patterns</section>
        <section></section>
        <section></section>
        {/* <Singleton /> */}

        {/* <Proxy /> */}
        {/* <Provider /> */}
        {/* <Prototype /> */}
        <ContainerPresentational />
      </header>
    </div>
  );
}

export default App;
