function use(a,b){
  if( typeof a == 'function'){
    a();
  }
  else {
    if( typeof b == 'function'){
      b(a);
    }
  }
}
