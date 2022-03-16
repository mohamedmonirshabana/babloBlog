const Home = () => {

    const handleClick = (e) => { 
        console.log('hello , ninjas',e);
    };

    const handleClickAgain = (name, e) => {
        console.log('Hello ' + name, e.target);
     };

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>click me</button>
            <button onClick={(e) => {
                handleClickAgain('mario',e);
            }}>Click me again</button>
        </div>
     );
}
 
export default Home;