import React, { Component, useEffect, useState } from 'react';
import "../styles/BlogPost.css";
import { Post } from "./Post";

// class BlogPost extends Component {

//     state = {
//         listArtikel: []
//     }

//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(response => response.json())
//             .then(jsonResponse => {
//                 this.setState({ listArtikel: jsonResponse })
//                 console.log(this.state.listArtikel)
//             })
//     }


//     render() {
//         return (
//             <div className="post-article" >
//                 <h2>Article list</h2>
//                 {
//                     this.state.listArtikel.map(article => {
//                         return <Post title={article.title} content={article.body} />
//                     })
//                 }

//             </div>
//         )
//     }
// };

// export default BlogPost;


const BlogPost = () => {

    const [articles, setArticles] = useState([])

    const loadData = async () => {
        const result = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await result.json()
        setArticles(data)
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div>
            <h2>Article List</h2>
            {   articles.map(article => {
                    return <Post key={article.id} title={article.title} content={article.body} />
                })
            }
        </div>
    );
};

export default BlogPost;