import { Component } from '@angular/core';
declare let $: any
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  show() {
      if ( $("#name").val() != "") {
        $("#userName").animate({ "top": "0" }, 400)
      }
      else {
        $("#userName").animate({ "top": "105" }, 400)

      }


      if ( $("#age").val() != "") {
        $("#userAge").animate({ "top": "0" }, 400)
      }
      else {
        $("#userAge").animate({ "top": "105" }, 400)

      }


      if ( $("#email").val() != "") {
        $("#userEmail").animate({ "top": "0" }, 400)
    }
      else {
        $("#userEmail").animate({ "top": "105" }, 400)
     }


      if ( $("#password").val() != "") {
        $("#userPassword").animate({ "top": "0" }, 400)
      }
      else {
        $("#userPassword").animate({ "top": "105" }, 400)

      }


  }

 }
