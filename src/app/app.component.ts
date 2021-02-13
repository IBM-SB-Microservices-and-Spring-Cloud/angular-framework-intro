import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First App Started';
  isChanged = false;
  elements: number[] = [];
  color: String;

  changeName() {
    this.title = "Changed in Method";
    this.isChanged = true;
  }


  isNameChanged() {
    return this.isChanged;
  }

  addElement() {
    this.elements.push(this.elements.length + 1);
  }

  getColour(element: number) {
    //alert(element);
    this.color = element % 2 == 0 ? 'green' : 'red';
    //alert("Color: "+this.color);
    return this.color;
  }

  //Why we have this in app.component? Y not in username.component
  onUserWasClicked(usernameFromEvnt: String) {
    alert("Emit: " + usernameFromEvnt);
  }

  onUserHbyWasClicked(hbyFromEvent: String){
    alert("Emit:"+hbyFromEvent);
  }

}
