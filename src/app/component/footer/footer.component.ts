import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  clients = [
    // { image: 'assets/images/client-01.png', alt: 'Client 1' },
    // { image: 'assets/images/client-01.png', alt: 'Client 2' },
    // { image: 'assets/images/client-01.png', alt: 'Client 3' },
    // { image: 'assets/images/client-01.png', alt: 'Client 4' },
    // { image: 'assets/images/client-01.png', alt: 'Client 5' },
    // { image: 'assets/images/client-01.png', alt: 'Client 6' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
