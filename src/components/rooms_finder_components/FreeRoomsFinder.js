import React, { useState } from 'react';
import data from '../../real_rooms_availability.json';
import RoomsList from "./RoomsList";

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { green } from '@material-ui/core/colors';
import {Fab} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 100,
        width: 'auto',
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
    const [selectedStartTime, setStartTime] = useState(8);
    const [selectedEndTime, setEndTime] = useState(9);
    const [freeRooms, setFreeRooms] = useState([]);

    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
        findFreeRooms();
    };

    const handleStartTimeChange = (event) => {
        setStartTime(event.target.value);
        findFreeRooms();
    };

    const handleEndTimeChange = (event) => {
        setEndTime(event.target.value);
        findFreeRooms();
    };

    const findFreeRooms = () => {
        const freeRooms = [];
        for (const location in data) {
            for (const room in data[location]) {
                let isRoomFree = true;
                for (let i = selectedStartTime; i < selectedEndTime; i++) {
                    if (!data[location][room][selectedDay][i]) {
                        isRoomFree = false;
                        break;
                    }
                }
                if (isRoomFree) {
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
                <label htmlFor="start-time-select">משעה:</label>
                <Select
                    id="start-time-select"
                    value={selectedStartTime}
                    onChange={handleStartTimeChange}
                >
                    {Array.from({ length: 12 }, (_, i) => i + 8).map(hour => (
                        <MenuItem value={hour}>{hour}:00</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <label htmlFor="end-time-select">עד שעה:</label>
                <Select
                    id="end-time-select"
                    value={selectedEndTime}
                    onChange={handleEndTimeChange}
                >
                    {Array.from({ length: 12 }, (_, i) => i + 9).filter(hour => hour > selectedStartTime).map(hour => (
                        <MenuItem value={hour}>{hour}:00</MenuItem>
                    ))}
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
