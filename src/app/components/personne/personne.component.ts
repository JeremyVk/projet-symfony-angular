import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  personne: Personne = {};
  personnes: Array<Personne> = [];
  constructor(private ps: PersonneService) { }


  ngOnInit(): void {
   this.initPersonne()
  }

  addPerson() {
    this.ps.addPerson(this.personne).subscribe(res => {
      this.initPersonne();
      this.personne = {};
    })
 }

 initPersonne() {
  this.ps.getAllPersons().subscribe(res => {
    this.personnes = res;
    console.log(this.personnes)
  })
}
}
