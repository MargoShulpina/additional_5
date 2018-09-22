module.exports = function check(str, bracketsConfig) {
  let regexp = /\{\}|\[\]|\(\)|\|\||12|34|56|77|88/g;
 
   while(regexp.exec(str) !==null){
       str = str.replace(regexp, "")
      };
       
   if(str == ''){
     return true
    } 
    else {
      return false
   }
  }
