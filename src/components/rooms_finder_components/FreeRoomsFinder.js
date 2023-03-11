import React, { useState } from 'react';
import data from '../../real_rooms_availability.json';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import RoomsList from "./RoomsList";
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
        <div style={{direction: 'rtl'}}>

            <FormControl className={classes.formControl}>
                <label htmlFor="day-select">יום:</label>
                <Select
                    id="day-select"
                    value={selectedDay}
                    onChange={handleDayChange}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <label htmlFor="hour-select">שעה:</label>
                <Select
                    id="hour-select"
                    value={selectedHour}
                    onChange={handleHourChange}
                >
                    {Array.from({ length: 12 }, (_, i) => i + 8).map(hour => (
                        <MenuItem value={hour}>{hour}:00 - {hour + 1}:00</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Button variant="contained" className={classes.button} style={{backgroundColor: '#3fb58e', color: 'white'}} onClick={findFreeRooms}>
                מצא חדר פנוי
            </Button>

            <RoomsList freeRooms={freeRooms} />

        </div>
    );
};

export default FreeRoomsFinder;




