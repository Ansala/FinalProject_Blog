import React, { Fragment, Component } from 'react';
import axios from 'axios'
import Results from './Result'
import { Link } from 'react-router-dom'
import './forum.css'


class Forum extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        this.getTopics()
    }

    getTopics = () => {
        axios.get("/all").then(res => {
            // console.log(res.data)
            this.setState({ articles: res.data })
            console.log(this.state.articles)
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        return (
            <Fragment>
                <div className="genres">
                    <ul>
                    <li><Link to="/forum">All</Link></li>
                        <li><Link to="/forum/family">Family</Link></li>
                        <li><Link to="/forum/escape">Escape</Link></li>
                        <li><Link to="/forum/romance">Romantic</Link></li>
                        <li><Link to="/forum/learn">Learn</Link></li>
                        <li><Link to="/forum/adventure">Adventure</Link></li>
                        <li><Link to="/forum/fun">Fun</Link></li>
                    </ul>
                </div>
                <div className="jumbotron jumbotron-fluid" id="alltron">
                    <div className="container">
                        <h1 className="display-4 text-center">All Blogs</h1>
                        <p className="lead text-center">Everything...</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="createNew float-right">
                        {loggedIn ? (
                            <Link to="/newblog" className="btn btn-warning float-right" role="button">Create New Blog</Link>
                        ) : (
                            <Link to="/login" className="btn btn-warning float-right" role="button">Create New Blog</Link>
                        )}
                            </div>
                        
                        <div className="posts col-md-12">
                            <ul>
                                {this.state.articles.map(article => (

                                    <Results
                                        key={article._id}
                                        id={article._id}
                                        title={article.title}
                                        author={article.author}
                                        description={article.description}
                                    />

                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Forum;