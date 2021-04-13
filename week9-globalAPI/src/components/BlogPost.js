import React, { Component, useEffect, useState } from 'react';
import "../styles/BlogPost.css";
import { Post } from "./Post";

import API from "../services/index";

class BlogPost extends Component {
    state = {     //komponen state from react for statefull component
        listArticle: [],     // variable array to save API data
        insertArticle: {
            userId: 1,
            id: 1,
            title: "",
            body: ""
        }
    }
    getFromAPIServer = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                listArticle: result
            })
        })
    }
    componentDidMount() {        //komponen untuk mengecek saat component telah di mounting lalu panggil API
        this.getFromAPIServer()
    }
    handleDeleteArticle = (data) => {
        API.deleteNewsBlog(data)
            .then(() => {
                this.getFromAPIServer()
            })
    }
    handleAddArticle = (event) => {
        let formInsertArticle = { ...this.state.insertArticle };
        let timestamp = new Date().getTime();
        formInsertArticle['id'] = timestamp;
        formInsertArticle[event.target.name] = event.target.value;
        this.setState({ insertArticle: formInsertArticle });
    }

    handleSaveButton = () => {
        API.postNewsBlog(this.state.insertArticle)
            .then(() => {
                this.getFromAPIServer();
            })
    }
    render() {

        return (
            <div className="post-article">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Content</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" rows="3" onChange={this.handleAddArticle}></textarea>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSaveButton}>Save</button>
                <h2>List of Article</h2>
                {
                    this.state.listArticle.map(article => {
                        return <Post key={article.id} title={article.title} content={article.body} idArticle={article.id} deleteArticle={this.handleDeleteArticle}></Post>
                    })
                }
            </div>
        )
    }
}
export default BlogPost;