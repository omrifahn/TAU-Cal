import React, { useState } from 'react';
import data from '../../real_rooms_availability.json';
import RoomsList from "./RoomsList";

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    button: {
        backgroundColor: green[500],
        color: 'white',
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}));

const FreeRoomsFinder = () => {
    const classes = useStyles();
    const [selectedDay, setSelectedDay] = useState(1);
    const [selectedHour, setSelectedHour] = useState(8);
    const [freeRooms, setFreeRooms] = useState([]);

    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
        findFreeRooms();
    };

    const handleHourChange = (event) => {
        setSelectedHour(event.target.value);
        findFreeRooms();
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
        <div style={{direction: 'rtl'}}>

            <FormControl className={classes.formControl}>
                <label htmlFor="day-select">יום:</label>
                <Select
                    id="day-select"
                    value={selectedDay}
                    onChange={handleDayChange}
                >
                    <MenuItem value={1}>א׳</MenuItem>
                    <MenuItem value={2}>ב׳</MenuItem>
                    <MenuItem value={3}>ג׳</MenuItem>
                    <MenuItem value={4}>ד׳</MenuItem>
                    <MenuItem value={5}>ה׳</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl} >
                <label htmlFor="hour-select">שעה:</label>
                <Select
                    id="hour-select"
                    value={selectedHour}
                    onChange={handleHourChange}
                    style={{direction: 'ltr'}}
                >
                    <MenuItem value={8}>08:00 - 09:00</MenuItem>
                    <MenuItem value={9}>09:00 - 10:00</MenuItem>
                    <MenuItem value={10}>10:00 - 11:00</MenuItem>
                    <MenuItem value={11}>11:00 - 12:00</MenuItem>
                    <MenuItem value={12}>12:00 - 13:00</MenuItem>
                    <MenuItem value={13}>13:00 - 14:00</MenuItem>
                    <MenuItem value={14}>14:00 - 15:00</MenuItem>
                    <MenuItem value={15}>15:00 - 16:00</MenuItem>
                    <MenuItem value={16}>16:00 - 17:00</MenuItem>
                    <MenuItem value={17}>17:00 - 18:00</MenuItem>
                    <MenuItem value={18}>18:00 - 19:00</MenuItem>
                    <MenuItem value={19}>19:00 - 20:00</MenuItem>
                </Select>

            </FormControl>

            <RoomsList freeRooms={freeRooms} />
            {
                (freeRooms.length > 0) ? <div><br/><br/></div> : <div>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            }
        </div>
    );
};

export default FreeRoomsFinder;
