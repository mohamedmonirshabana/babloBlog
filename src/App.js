
import './App.css';

function App() {

  const title = 'Werlcome to the new Blog';
  const likes = 50;
  const person = { name: 'yoshi', age: 30 };
  const googleLink = "http://www.google.com";


  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/* <p>{ person }</p> */}
        <p>{10}</p>
        <p>{"hello, Ninja"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p> {Math.random() * 20} </p>
        <a href={ googleLink }>Google Site</a>
      </div>
    </div>
  );
}

export default App;
