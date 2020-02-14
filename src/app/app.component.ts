import { Component } from '@angular/core';
import * as dragon from 'openseadragon';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  loadImage() {
     dragon({
      id: 'openseadragon1',
      // prefixUrl: './../../../assets/seaDragon/',
      tileSources: {
        type: 'image',
        url:  './../../../assets/image.png',
      },
      showNavigator: true,
      navigatorPosition:   'BOTTOM_LEFT',
    });
  }
}
