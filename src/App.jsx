import { useState } from 'react';
import styles from './App.module.scss';
import NavBar from './components/NavBar';
import Routes from './containers/Routes';

function App() {
  const [activePage, setActivePage] = useState(false);

  return (
    <div className={styles.App}>
      <NavBar activePage={activePage} />
      <Routes setActivePage={setActivePage} />
    </div>
  );
}

export default App;
