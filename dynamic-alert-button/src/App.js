import './App.css';
import Toolbar from "./Toolbar"

function App() {
  return (
    <div style={styles.app}>
      <h1 style={styles.title}>Alert Buttons!</h1>
      <Toolbar/>
    </div>
  );
}


const styles = {
  app: {
    textAlign: "center",
    fontFamily: "Libre Baskerville, serif",
    
  },
  title: {
    color: "black",
  },
};


export default App;
