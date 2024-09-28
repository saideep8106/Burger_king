import React, { Component } from 'react';
import NavBar from './Nav';
import Home from './Home';
import Cards from './Cards';
import Footer from './Footer';

    export default class App extends Component{
        constructor(props){
            super(props);
        }
        render(){
            return(
                <>
                      <NavBar/>
                      <Home/>
                      <Cards />
                      <Footer/>
                </>
            )
        }
    }