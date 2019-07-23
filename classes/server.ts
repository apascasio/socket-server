import express from 'express';
import { Server_PORT } from '../global/environment';

export default class Server {
    public app: express.Application;
    public port: number;

    constructor() {
        this.app =  express();
        this.port = Server_PORT;
    }

    start( callback: Function ){
        this.app.listen(this.port, callback()) ;
    }

}