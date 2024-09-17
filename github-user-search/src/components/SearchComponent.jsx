import { useState } from "react";
const SearchComponent = () => {
    const [username, setUsername] = useState('');

    const handlChange = (e) => {
        setUsername(e.target.value);
    }



    

    return (
        <div> 
            <input 
            type="name" 
            placeholder="enter username"
            name="username"
            value={username}
            onChange={handlChange}
            />
        </div>
    )
}
export default SearchComponent;