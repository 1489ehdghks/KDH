import './App.css';


function App() {
  const onClick=()=>{
    import('./notify').then(result=>result.default());
  };
  return (
    <div className='App'>
      <header className='App-header'></header>
      <p onClick={onClick}>function</p>
    </div>
  );
}

export default App;
