import { useState } from 'react';

const Home = () => {
    // let name = 'mario';
    const [name, setName] = useState('mario');

    const handleClick = () => { 
        // name = 'luigi';
        setName('luigi');
    };


    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>click me</button>
           
        </div>
     );
}
 
export default Home;