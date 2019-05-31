import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { ChatMessage } from './chat';

import * as socketIo from 'socket.io-client';
import { environment } from '../../../environments/environment';

// const SERVER_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
    private socket;
    public activechatuser;

    public initSocket(): void {
        this.socket = socketIo(environment.socketioUrl);
    }

    public sendChat(data): void {
        this.socket.emit('chat', data);
    }

    public onChat(): Observable<ChatMessage> {
        return new Observable<ChatMessage>(observer => {
            this.socket.on('chat', (data: ChatMessage) => observer.next(data));
        });
    }
    
    public onEvent(event): Observable<any> {
        return new Observable(observer => {
            this.socket.on(event, () => observer.next());
        });
    }
}
