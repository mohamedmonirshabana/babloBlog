import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Back End Developer', body: 'Loren sub...', author: 'Moahmed', id: 1 },
        { title: 'Front End Developer', body: 'Loren sub...', author: 'Hamed', id: 2 },
        {title: 'Mobile Developer', body: 'Loren sub...', author: 'Karen', id: 3 }
    ]);
    
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p> writen by : {blog.author}</p>
                    
                </div>
            ))}           
        </div>
     );
}
 
export default Home;