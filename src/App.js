import './App.css';
import CalendarTable from "./components/Calendar_components/CalendarTable";
import Footer from "./components/Footer";
import Tabs from "./components/Tabs";
import FreeRoomsFinder from "./components/rooms_finder_components/FreeRoomsFinder";

function App() {
  return (
    <div className="App">
        <Tabs>
            <div label="חדרים פנויים">
                <FreeRoomsFinder />
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
