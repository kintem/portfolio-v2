import { useState } from 'react';
import styles from './App.module.scss';
import NavBar from './components/NavBar';
import Routes from './containers/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  AOS.init();

  const [activePage, setActivePage] = useState(false);

  return (
    <div className={styles.App} data-aos="zoom-in">
      <NavBar activePage={activePage} />
      <Routes setActivePage={setActivePage} />
    </div>
  );
}

export default App;
