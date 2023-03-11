import './App.css';
import Table from "./components/Table";
import Footer from "./components/Footer";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="App">
        <Tabs>
            <div label="חדרים פנויים">
                בבניה, פה יהיו חדרים פנויים
            </div>

            <div label="חיפוש קורסים">
                <Table />
            </div>
        </Tabs>

        <Footer />
    </div>
  );
}
export default App;
