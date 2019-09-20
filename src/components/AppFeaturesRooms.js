import React from 'react';
import { RoomContext } from './Context/context';

export default class AppFeaturesRooms extends React.Component {
    static contextType = RoomContext
    render() {
        const value = this.context
        console.log(value)
        return (
            <div>
                <h3>Hello from features components</h3>
            </div>
        )
    }
}
