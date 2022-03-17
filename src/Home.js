import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Back End Developer', body: 'Loren sub...', author: 'Moahmed', id: 1 },
        { title: 'Front End Developer', body: 'Loren sub...', author: 'Hamed', id: 2 },
        {title: 'Mobile Developer', body: 'Loren sub...', author: 'Karen', id: 3 }
    ]);
    
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
        </div>
     );
}
 
export default Home;