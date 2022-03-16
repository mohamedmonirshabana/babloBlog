import { useState } from 'react';

const Home = () => {
    // let name = 'mario';
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(22);

    const handleClick = () => { 
        // name = 'luigi';
        setName('luigi');
        setAge(37);
    };


    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is { age } years old</p>
            <button onClick={handleClick}>click me</button>
           
        </div>
     );
}
 
export default Home;