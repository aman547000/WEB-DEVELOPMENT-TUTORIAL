import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Signup, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-tut';

  // name = 'Aman';
  // x=10;
  // y=20;
  // user1='aditya'
  // user2='aman'

  // handleClickEvent(){
  //   console.log("function called");
  //   this.otherFunction();
  // }

  // otherFunction(){
  //   console.log("other function called");
  // }


  // name:string="Aman"
  // data:string|number="hello"
  // other:any=true

  // updateName(){
  //   this.name="aditya"
  //   this.data="123"

  //   this.other="aman"

  //   this.other=30

  //   this.other={}

  // }

  // updateVar(){
  //   let x= 30;

  //   console.log(x);
    
  //   this.sum(30,50);
  // }

  // sum(a:number,b:number){
  //   console.log(a+b);
  // }

  count=0
   
  // handleIncrement(){
  //   this.count = this.count+1
  // }
  // handleDecrement(){
  //   this.count=this.count-1
  // }
  // handleReset(){
  //   this.count=0
  // }

  handleCounter(val:string){
    if(val=='minus'){
      this.count=this.count-1
    }
    else if(val=='plus'){
      this.count=this.count+1
    }
    else{
      this.count=0
    }
  }

}
