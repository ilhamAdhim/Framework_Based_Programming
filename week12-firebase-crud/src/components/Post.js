import React from 'react';

export const Post = (props) => {
    return (
        <div className="article">
            <div className="image-article">
                <img src="http://placeimg.com/80/80/tech" alt="Thumbnail" />
            </div>
            <div className="content-article">
                <div className="title">{props.title}</div>
                <p className="isi-artikel"> {props.content} </p>
                <button className="btn btn-sm btn-warning"
                    onClick={() => {
                        if (window.confirm("Are you sure want to delete this article ? "))
                            props.deleteArticle(props.idArticle)
                    }}>
                    Delete</button>
            </div>
        </div>
    );
};
