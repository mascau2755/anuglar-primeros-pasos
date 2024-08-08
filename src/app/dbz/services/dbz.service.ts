import { Injectable } from '@angular/core';
import { Character } from '../interfaces/charater.interfaces';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})



export class DbzServices {

  public character: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];


  addCharacter(character: Character):void{

    const newCharacter:  Character = { id: uuid(),...character};


    this.character.push(newCharacter);
  }


  // onDeleteCharacter (index: number){
  //   this.character.splice(index,1);
  // }

  deleteCharacterById(id:string){
    this.character = this.character.filter (charcter => charcter.id !== id);
  }

}
