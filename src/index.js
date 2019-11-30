import React from "react"
import ReactDOM from "react-dom"
import * as firebase from 'firebase'
import App from "./components/App.js"
import config from './firebaseConfig'
import './stylesheets/Index.scss'

ReactDOM.render(<App />, document.getElementById("root"))