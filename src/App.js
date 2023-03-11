import './App.css';
import CalendarTable from "./components/CalendarTable";
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
                <CalendarTable />
            </div>
        </Tabs>

        <Footer />
    </div>
  );
}
export default App;
