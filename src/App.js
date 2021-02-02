import ProfilPhoto from './components/profile/ProfilPhoto';
import FullName from './components/profile/FullName';
import Address from './components/profile/Address';
import './App.css';



function App() {
  return (
    <div className="App">
          <div>
            <ProfilPhoto/>
          </div>

          <div>
            <FullName/>
          </div>

          <div>
            <Address/>
          </div>
    </div>
  );
}

export default App;
