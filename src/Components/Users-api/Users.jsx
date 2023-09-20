import { useEffect, useState } from "react";
import axios from "axios";
const Users = () => {
    const [users,setUsers] = useState([]);

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(data => console.log(data.data))
    },[])
    return (
        <div>
            <h2>hello</h2>
        </div>
    );
};

export default Users;