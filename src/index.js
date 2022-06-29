module.exports = function toReadable (number) {
  const n = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const tn = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  const num = +number.toString().split('')[number.toString().length-1];
  const ten = +number.toString().split('')[number.toString().length-2];
  const hundred = +number.toString().split('')[number.toString().length-3];
  
  if (number<20) return(n[number])
  if (number<100) {if (number%10 === 0) {return(tn[ten])}
                  else return(tn[ten]+' '+n[num])}
  if (number<1000) {if (number%100 === 0) return(n[hundred]+' hundred')
                    if (number%10 === 0) return(n[hundred]+' hundred '+tn[ten])
                    if (ten<2) return(n[hundred]+' hundred '+n[ten*10+num])
                    else return(n[hundred]+' hundred '+tn[ten]+' '+n[num])
  }
}