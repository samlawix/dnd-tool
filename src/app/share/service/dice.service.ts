import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';

import 'rxjs/Rx';

@Injectable()
export class DiceService {

    constructor(
      private socket: Socket
    ) { }

    public sendMessage(msg: string, payload: any = null){
        this.socket.emit(msg, payload);
    }

    public getMessage(msg: string) {
        return this.socket.fromEvent<any>(msg);
    }

    public close() {
      this.socket.disconnect();
    }
}
