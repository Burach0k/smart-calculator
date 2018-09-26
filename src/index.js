class SmartCalculator {
  constructor(initialValue) {
    this.initialValue = initialValue + " ";
  }

  add(number) {
    this.initialValue = this.initialValue +"+"+ number;
    return this;
  }
  
  subtract(number) {
    this.initialValue =this.initialValue +"-"+ number;
    return this;
  }

  multiply(number) {
    this.initialValue = this.initialValue +"*"+ number;
    return this;
  }

  devide(number) {
    this.initialValue = "("+this.initialValue +"/"+ number+")";
    return this;
  }

  pow(number) {
    var i = 0;
    var j = 0;
    var a = "";
    var c = "";
    var r = ")";
    var b;
    for(i = 0; i<20; i++){
      b =this.initialValue[this.initialValue.length-1 - i];
      if((b == "+")||(b == "-")||(b == "*")||(b == "/")||(b == undefined)||(b == ",")){
        break;
      }
      if(b != ")"){
        a = this.initialValue[this.initialValue.length - 1 - i] +a;
        
      }else{
        c = c + r;
      }
        j++;
    }
    this.initialValue = this.initialValue.substring(0,this.initialValue.length-j) + 'Math.pow(' + a + ', ' + number + ') ' + c;
    return this;
  }
  toString(){
    console.log(this.initialValue);
    return eval(this.initialValue);
  }

}

module.exports = SmartCalculator;
