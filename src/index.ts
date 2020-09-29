import "reflect-metadata";
import {createConnection} from "typeorm";
import Container from './repository/Container';
import App from "./App";

createConnection().then(async connection => {
    new App(new Container(connection)).start()
}).catch(error => console.log(error));
