import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './Home/';
import About from './About/';
import Contact from './Contact/';
import Post from './Post/';
import Todos from './Todos/';
import NotFound from './NotFound404';


function ReactRouter() {
    // let isLogged = true
            // {isLogged ? <Home /> : <NotFound />}
    return (
        <Router>
        <Routes>
            <Route exact path = "/" element = {<Home />} />
            <Route exact path = "/Post" element = {<Post />} />
            <Route exact path = "/Todos" element = {<Todos />} />
            <Route exact path = "/About" element = {<Navigate to = "/Contact" />} />
            <Route exact path = "/Contact" element = {<Contact />} />
            <Route element = {<NotFound />} />
        
        </Routes>
        </Router>
    )
}


export default ReactRouter;