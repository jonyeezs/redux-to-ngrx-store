import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(store: Store<any>) {
    // See what the global store holds
    store.select(globalStore => globalStore).subscribe((globalStore) => {
        const today = new Date();
        const hrs = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
        const time = `${hrs}:${today.getMinutes()}:${today.getSeconds()}.${today.getMilliseconds()}`;
        console.log(time, globalStore);
    });
  }
}
