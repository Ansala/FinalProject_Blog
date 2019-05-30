import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import './newblog.css'

class NewBlog extends Component {

    state = {
        title: "",
        author: "",
        description: "",
        genre: "family",
        redirectTo: null
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state)

        const post = { title: this.state.title, author: this.props.username, genre: this.state.genre, description: this.state.description }

        axios.post("/post", post).then(res => {
            console.log(res.data)
        })

        this.setState({
            title: "",
            description: "",
            redirectTo: '/forum'
        })

    }

    render() {
        const loggedIn = this.props.loggedIn;


        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
            <div>
                {loggedIn ? (
                <div>
                    <div className="form-group newblogform container">
                        <div className="genrePick">
                        <label className="form-label1" htmlFor="title">Pick the Genre:    </label>
                            <select name="genre" className="custom-select custom-select-md" value={this.state.genre} onChange={this.handleInputChange}>
                                <option value="family">Family</option>
                                <option value="escape">Escape</option>
                                <option value="romance">Romance</option>
                                <option value="learn">Learn</option>
                                <option value="adventure">Adventure</option>
                                <option value="fun">Fun</option>
                            </select>
                        </div>
                        <div className="titlePick">    
                        <label className="form-label2" htmlFor="title">Title:</label>
                            <div>
                                <input className="form-input1"
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="descriptionPick">    
                        <label className="form-label3" htmlFor="description">Blog:</label>
                            <div>
                                <textarea className="form-input2"
                                    type="text"
                                    id="description"
                                    name="description"
                                    rows="15"
                                    cols="100"
                                    value={this.state.description}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                         </div>   
                    </div>
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </div>
                ) : (
                    <div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="title">Pick the Genre:</label>
                            <select name="genre" className="custom-select custom-select-md" value={this.state.genre} onChange={this.handleInputChange} disabled>
                                <option value="family">Family</option>
                                <option value="escape">Escape</option>
                                <option value="romance">Romance</option>
                                <option value="learn">Learn</option>
                                <option value="adventure">Adventure</option>
                                <option value="fun">Fun</option>
                            </select>
                        <label className="form-label" htmlFor="title">Title:</label>
                            <div>
                                <input className="form-input"
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={this.state.title}
                                    disabled
                                />
                            </div>
                        <label className="form-label" htmlFor="description">Blog:</label>
                            <div className="textarea1">
                                <textarea className="form-input"
                                    type="text"
                                    id="description"
                                    name="description"
                                    rows="15"
                                    cols="100"
                                    value="Please sign in to make a blog"
                                    disabled
                                />
                            </div>
                    </div>
                    <button onClick={this.handleFormSubmit} disabled>Submit</button>
                </div>
            
                )}
            </div>
            )
        }
    }
}

export default NewBlog;