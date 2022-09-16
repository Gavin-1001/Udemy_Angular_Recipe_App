import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredients.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false})nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false})amountInputRef: ElementRef;
  @Output() ingredientsAdded = new EventEmitter<Ingredient>();
  // passing an object as an argument. The type will be a javascript objet with

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    //emit a new event that passes this data to the parent component
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.ingredientsAdded.emit(newIngredient);
  }


}
