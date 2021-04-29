import React, { Component } from 'react';
import "../styles/BlogPost.css";
import { Post } from "./Post";
import firebase from "firebase"

import API from "../services/index";
import firebaseConfig from '../firebase/config';

class BlogPost extends Component {
    constructor(props) {
        super(props)
        firebase.initializeApp(firebaseConfig)

        this.state = {     //komponen state from react for statefull component
            listArticle: [],     // variable array to save API data
        }
    }

    getFromAPIServer = () => {
        let ref = firebase.database().ref("/")
        ref.on('value', snapshot => {
            const state = snapshot.val()
            this.setState(state)
        })
    }

    componentDidMount() {        //komponen untuk mengecek saat component telah di mounting lalu panggil API
        this.getFromAPIServer()
    }

    saveDataToServer = () => {
        firebase.database().ref("/").set(this.state)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) this.saveDataToServer()
    }

    handleDeleteArticle = idArticle => {
        const { listArticle } = this.state
        const newState = listArticle.filter(data => data.id !== idArticle)
        this.setState({ listArticle: newState })
    }

    handleSaveButton = (event) => {
        let title = this.refs.judulArtikel.value
        let body = this.refs.isiArtikel.value
        let uid = this.refs.id.value

        if (uid && title && body) {
            const { listArticle } = this.state
            const indeksArtikel = listArticle.findIndex(data => data.id === uid)
            listArticle[indeksArtikel].title = title
            listArticle[indeksArtikel].body = body
            this.setState({ listArticle })

        } else if (title && body) {
            const id = new Date().getTime().toString()
            const { listArticle } = this.state
            listArticle.push({ id, title, body })
            this.setState({ listArticle })

        }

        this.refs.judulArtikel.value = ""
        this.refs.isiArtikel.value = ""
        this.refs.id.value = ""
    }

    render() {
        return (
            <div className="post-article">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                            <input className="form-control" id="title" name="title" ref="judulArtikel"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Content</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" rows="3" ref="isiArtikel"></textarea>
                        </div>
                    </div>
                    <input type="hidden" name="id" ref="id"></input>
                    <button type="submit" className="btn btn-primary" onClick={this.handleSaveButton}>Save</button>
                </div>
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