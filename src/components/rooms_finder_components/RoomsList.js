import React from 'react';

const RoomsList = (props) => {
    const { freeRooms } = props;

    return (
        <ul style={{ direction: 'rtl' }}>
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
    );
};

export default RoomsList;
