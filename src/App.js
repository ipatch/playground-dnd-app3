import Hello from './hello.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
