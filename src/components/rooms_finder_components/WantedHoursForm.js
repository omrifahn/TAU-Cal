import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const WantedHoursForm = ({ selectedDay, selectedHour, handleDayChange, handleHourChange, findFreeRooms }) => {
    const classes = useStyles();

    return (
        <div>
            <FormControl className={classes.formControl}>
                <label htmlFor="day-select">Day:</label>
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
                <label htmlFor="hour-select">Hour:</label>
                <Select
                    id="hour-select"
                    value={selectedHour}
                    onChange={handleHourChange}
                >
                    <MenuItem value={8}>8:00 - 9:00</MenuItem>
                    <MenuItem value={9}>9:00 - 10:00</MenuItem>
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
            <Button variant="contained" color="primary" onClick={findFreeRooms}>
                Find Free Rooms
            </Button>
        </div>
    );
};

export default WantedHoursForm;



