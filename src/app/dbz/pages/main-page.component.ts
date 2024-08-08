import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/charater.interfaces';
import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {



  constructor( private dbzServices: DbzServices ){}

    get characters(): Character[]{
      return [...this.dbzServices.character];
    }

    onDeleteCharacter (id:string):void{
      this.dbzServices.deleteCharacterById (id);
    }

    onNewCharacter (character:Character):void{
      this.dbzServices.addCharacter(character);
    }



}
