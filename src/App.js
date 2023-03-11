import './App.css';
import CalendarTable from "./components/Calendar_components/CalendarTable";
import Footer from "./components/Footer";
import Tabs from "./components/Tabs";
import FreeRoomsFinder from "./components/rooms_finder_components/FreeRoomsFinder";

function App() {
  return (
    <div className="App">
        <Tabs>
            <div label="מצא חדר פנוי">
                <FreeRoomsFinder />
            </div>

            <div label="הכנסת קורסים ללוח שנה">
                <CalendarTable />
            </div>
        </Tabs>

        <Footer />
    </div>
  );
}
export default App;
