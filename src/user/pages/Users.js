import React from 'react'
import UsersList from '../components/UsersList';
// delegate teh rending of the userslist comp
//to the users comp

const Users = () => {
    const Users = [{
        id:'u1',
        name:'Will H',
        image:
            'https://www.americancentury.com/content/dam/ac/images/blog/allwood-feeling-lucky-dont-chance-it-with-your-investments-og.png', 
        places: 3}];
    return <UsersList items={Users} />
};

export default Users;

//