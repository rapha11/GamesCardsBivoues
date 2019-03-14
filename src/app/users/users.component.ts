import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    @Input() name: string;
  constructor() {

   /* $(function(){

        var socket = io.connect('http://localhost:3000');
      $('#login_form').submit(function( event ){
          event.preventDefault();
          socket.emit('login', {
              id: 'test',
              username : $('#loginUsername').val()
          });
      });

      socket.on('newuser', function(userr){
        console.log("I receive + " + userr);
      });
});*/

   }

  ngOnInit() {
  }

}
