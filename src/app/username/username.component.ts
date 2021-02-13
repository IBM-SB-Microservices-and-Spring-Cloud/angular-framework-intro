import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-username',
    //template: `
    //    <p>{{username}}</p>
    //`
    templateUrl: './username.component.html'
})
export class UsernameComponent {
    @Input() username: String;

    @Output() userClicked = new EventEmitter<String>();
    @Output() userHbyClicked = new EventEmitter<String>();

    message = "";

    hobbies: String[] = ["Reading", "Writing", "Listening"];

    onUsernameClicked() {
        this.userClicked.emit(this.username);
    }

    getHbyColour(hby) {
        return hby == "Reading" ? 'red' : 'green';
    }

    addHobby() {
        this.hobbies.push("Hobby".concat(this.hobbies.length + ''));
    }

    onUserHbyClicked(){
        this.userHbyClicked.emit("Hobbies Clicked");
    }
}