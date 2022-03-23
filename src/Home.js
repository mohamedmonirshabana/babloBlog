import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Back End Developer', body: 'Loren sub...', author: 'Mohamed', id: 1 },
        { title: 'Front End Developer', body: 'Loren sub...', author: 'Mohamed', id: 2 },
        {title: 'Mobile Developer', body: 'Loren sub...', author: 'Karen', id: 3 }
    ]);

    const handleDelete = (id) => { 
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(() => {
        console.log('use Effect ran');
        console.log(blogs);
    },[]);
    
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </div>
     );
}
 
export default Home;