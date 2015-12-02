//이 때까지 잘못알고 있었음. ㅡ_ㅡ;;
//다형성 되는지 알았는데...ㅋㅋㅋㅋ
function sayMessage(message){
  //if( arguments.length < 1 )
  console.log(message);
  if( !message /*message == undefined*/ )
    message = "기본메시지";
  console.log(message);
}

/*function sayMessage(){
  if( arguments.length < 1 )
  console.log("기본메시지");
  else {
    console.log(arguments[0]);
  }
}*/

sayMessage("aaaaaaaaaa");

sayMessage();
