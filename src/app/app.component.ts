import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos= [
     {
       description: 'Digital House',
       url: 'https://www.digitalhouse.com/br/assets/metas/200903170927-2p33kws0ken8tfwd.png'
     },
     {
      description: 'Digital House',
      url: 'https://www.digitalhouse.com/br/assets/metas/200903170927-2p33kws0ken8tfwd.png'
    },
    {
      description: 'Digital House',
      url: 'https://www.petz.com.br/blog/wp-content/uploads/2021/03/piercing-para-cachorro-2.jpg'
    },
    {
      description: 'Digital House',
      url: 'https://www.digitalhouse.com/br/assets/metas/200903170927-2p33kws0ken8tfwd.png'
    }
  ]
}

