import React, { useState } from 'react';
import data from '../../real_rooms_availability.json';
import RoomsList from "./RoomsList";

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { green } from '@material-ui/core/colors';
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 100,
        width: 'auto',
    },
    button: {
        backgroundColor: "#3fb58e",
        color: 'white',
        borderRadius: '25px',
        '&:hover': {
            backgroundColor: "#3fb58e",
        },
    },
}));

const FreeRoomsFinder = () => {
    const classes = useStyles();
    const [selectedDay, setSelectedDay] = useState(1);
    const [startHour, setStartHour] = useState(8);
    const [endHour, setEndHour] = useState(9);
    const [freeRooms, setFreeRooms] = useState([]);


    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
    };

    const handleStartHourChange = (event) => {
        setStartHour(event.target.value);
    };

    const handleEndHourChange = (event) => {
        setEndHour(event.target.value);
    };

    const handleSendButtonClick = () => {
        setFreeRooms([]);
        const filteredFreeRooms = [];
        for (const location in data) {
            for (const room in data[location]) {
                let isFree = false;
                for (let i = startHour; i < endHour; i++) {
                    isFree = true;
                    if (!data[location][room][selectedDay][i]) {
                        isFree = false;
                        break;
                    }
                }
                if (isFree) {
                    filteredFreeRooms.push({ location, room });
                }
            }
        }
        setFreeRooms(filteredFreeRooms);
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
                <label htmlFor="start-hour-select">משעה:</label>
                <Select
                    id="start-hour-select"
                    value={startHour}
                    onChange={handleStartHourChange}
                    style={{direction: 'ltr'}}
                >
                    <MenuItem value={8}>08:00</MenuItem>
                    <MenuItem value={9}>09:00 </MenuItem>
                    <MenuItem value={10}>10:00</MenuItem>
                    <MenuItem value={11}>11:00</MenuItem>
                    <MenuItem value={12}>12:00</MenuItem>
                    <MenuItem value={13}>13:00</MenuItem>
                    <MenuItem value={14}>14:00</MenuItem>
                    <MenuItem value={15}>15:00</MenuItem>
                    <MenuItem value={16}>16:00</MenuItem>
                    <MenuItem value={17}>17:00</MenuItem>
                    <MenuItem value={18}>18:00</MenuItem>
                    <MenuItem value={19}>19:00</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl} >
                <label htmlFor="end-hour-select">עד שעה:</label>
                <Select
                    id="end-hour-select"
                    value={endHour}
                    onChange={handleEndHourChange}
                    style={{direction: 'ltr'}}
                >
                    <MenuItem value={9}>09:00</MenuItem>
                    <MenuItem value={10}>10:00</MenuItem>
                    <MenuItem value={11}>11:00</MenuItem>
                    <MenuItem value={12}>12:00</MenuItem>
                    <MenuItem value={13}>13:00</MenuItem>
                    <MenuItem value={14}>14:00</MenuItem>
                    <MenuItem value={15}>15:00</MenuItem>
                    <MenuItem value={16}>16:00</MenuItem>
                    <MenuItem value={17}>17:00</MenuItem>
                    <MenuItem value={18}>18:00</MenuItem>
                    <MenuItem value={19}>19:00</MenuItem>
                    <MenuItem value={20}>20:00</MenuItem>
                </Select>
            </FormControl>

            <br/>
            <Button variant="contained" className={classes.button} onClick={handleSendButtonClick}>
                שלח
            </Button>

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
