import React, { useState } from 'react';
import data from './../real_rooms_availability.json';

const FreeRoomsFinder = () => {
    const [selectedDay, setSelectedDay] = useState(1);
    const [selectedHour, setSelectedHour] = useState(8);
    const [freeRooms, setFreeRooms] = useState([]);

    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
    };

    const handleHourChange = (event) => {
        setSelectedHour(event.target.value);
    };

    const findFreeRooms = () => {
        const freeRooms = [];
        for (const location in data) {
            for (const room in data[location]) {
                if (data[location][room][selectedDay][selectedHour]) {
                    freeRooms.push({ location, room });
                }
            }
        }
        setFreeRooms(freeRooms);
    };

    return (
        <div>
            <div>
                <label htmlFor="day-select">Day:</label>
                <select id="day-select" value={selectedDay} onChange={handleDayChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div>
                <label htmlFor="hour-select">Hour:</label>
                <select id="hour-select" value={selectedHour} onChange={handleHourChange}>
                    <option value={8}>8:00 - 9:00</option>
                    <option value={9}>9:00 - 10:00</option>
                    <option value={10}>10:00 - 11:00</option>
                    <option value={11}>11:00 - 12:00</option>
                    <option value={12}>12:00 - 13:00</option>
                    <option value={13}>13:00 - 14:00</option>
                    <option value={14}>14:00 - 15:00</option>
                    <option value={15}>15:00 - 16:00</option>
                    <option value={16}>16:00 - 17:00</option>
                    <option value={17}>17:00 - 18:00</option>
                    <option value={18}>18:00 - 19:00</option>
                    <option value={19}>19:00 - 20:00</option>
                </select>
            </div>
            <button onClick={findFreeRooms}>Find Free Rooms</button>

            <ul style={{ direction: 'rtl'}}>
                {freeRooms.map((freeRoom, index, allRooms) => (
                    <React.Fragment key={`${freeRoom.location}-${freeRoom.room}`}>
                        {index === 0 || allRooms[index - 1].location !== freeRoom.location ? (
                            <li style={{ listStyleType: 'none', margin: '0', padding: '0.5em' }}>
                                <strong>{freeRoom.location}:</strong>
                            </li>
                        ) : null}
                        <li style={{ listStyleType: 'none' }}>
                            {freeRoom.room}
                        </li>
                    </React.Fragment>
                ))}
            </ul>

        </div>
    );
};

export default FreeRoomsFinder;
