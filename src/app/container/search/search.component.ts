import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  inputText:string="";

  @ViewChild('searchInput') searchInputEl: ElementRef;

  @Output()
  searchText= new EventEmitter<string>();


  eventEmitter(){
    // console.log(inputRs.value)
    this.inputText=this.searchInputEl.nativeElement.value;
    console.log(this.inputText)
    this.searchText.emit(this.inputText);
  }  

}
