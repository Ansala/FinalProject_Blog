import React, { Component } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'
import './App.css'
// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbar from './components/navbar'
import Home from './components/home'
import Forum from './components/forum'
import NewBlog from './components/Newblog'
import Family from './components/Genres/family'
import Escape from './components/Genres/escape'
import Learn from './components/Genres/learn'
import Fun from './components/Genres/fun'
import Romance from './components/Genres/romance'
import Adventure from './components/Genres/adventure'
import Comments from './components/comments'
import Footer from './components/footer'


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">

        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        <Route
          exact path="/"
          component={Home} />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup
              signup={this.signup}
            />}
        />
        <Route
          exact path="/forum"
          render={() =>
            <Forum
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          path="/newblog"
          render={() =>
            <NewBlog
              username={this.state.username}
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          path="/forum/family"
          render={() =>
            <Family
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          path="/forum/escape"
          render={() =>
            <Escape
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          path="/forum/learn"
          render={() =>
            <Learn
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          path="/forum/fun"
          render={() =>
            <Fun
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          path="/forum/romance"
          render={() =>
            <Romance
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          path="/forum/adventure"
          render={() =>
            <Adventure
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          exact path="/blog/:id"
          component={Comments} />
        <Footer />
      </div>
    );
  }
}

export default App;