import { Component, OnInit } from '@angular/core';
import { JugueteriaFirebaseService } from 'src/app/services/jugueteria-firebase.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  juguetesFirebase: any[] = [];

  constructor(private service: JugueteriaFirebaseService) { }

  ngOnInit(): void {
    this.juguetes();
  }

  juguetes() {
    this.service.getJuguetes().subscribe(
      (resp: any) => {
        resp.forEach((data: any) => {
          this.juguetesFirebase.push({
            data: data.payload.doc.data()
          });
        });
        console.log(this.juguetesFirebase);
      }
    );
  }
}
