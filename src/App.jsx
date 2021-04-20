import styles from './App.module.scss';
import Home from './containers/Home';
import Routes from './containers/Routes';
import library from "./data/fa-library";

function App() {
  return (
    <div className={styles.App}>
      <Home />
      <Routes />
    </div>
  );
}

export default App;
