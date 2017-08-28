import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';

import 'rxjs/Rx';

@Injectable()
export class DiceService {

    constructor(
      private socket: Socket
    ) { }

    public sendMessage(msg: string){
        this.socket.emit('message', msg);
    }

    public getMessage() {
        return this.socket
            .fromEvent<any>('message')
            .map(data => data.msg );
    }

    public close() {
      this.socket.disconnect()
    }
}
