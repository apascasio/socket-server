import { Socket } from 'socket.io';
import { stringify } from 'querystring';
import socketIO from 'socket.io';
import Server from '../classes/server';

export const desconectar =(cliente:Socket) => {
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');

    });

}

export const mensaje = (cliente: Socket, io: socketIO.Server) => {
    cliente.on('mensaje', ( payload: { de:string, cuerpo:string} ) => {
        console.log('Mensaje recibido', payload);

        io.emit('mensaje-nuevo', payload);

    });

}