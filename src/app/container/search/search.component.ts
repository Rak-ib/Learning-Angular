import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  inputText:string="";

  @Output()
  searchText= new EventEmitter<string>();


  eventEmitter(){
    this.searchText.emit(this.inputText);
  }  

}
