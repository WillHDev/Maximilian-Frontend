import React from 'react';
import './UsersList.css';

const UsersList = props => {
    if ( props.items.length === 0 ) {
        return (
            <div className="center">
                <h1>No users found</h1>
            </div>
        )
    }
    return (
        <ul>
            {props.item.map( user => {
                 <UserItem 
                    key={user.id} 
                    id={user.id} 
                    image={user.image}
                    name={user.name} 
                    placeCount={user.places}/>
            })}
        </ul>

    )

};

export default UsersList;