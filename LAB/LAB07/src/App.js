import './App.css';
import Title from './components/title';
import MySidebar from './components/Mysidebar';
import MyMain from './components/main';

function App() {
  return (
    <div className="App">
      <Title/>
      <MySidebar />
      <MyMain/>
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;

