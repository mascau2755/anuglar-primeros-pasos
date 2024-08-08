import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/charater.interfaces';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: '',
    power: 0
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void{

    if(!id ) return;

    this.onDelete.emit(id);

  }
}
