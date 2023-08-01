function ChangeCharCode(num, add=true) {
  return function (letter, i, arr) {
    return add ? String.fromCharCode(letter.charCodeAt() + num)
    : String.fromCharCode(letter.charCodeAt() - num)
  }
}
const GenerateGibrish = ChangeCharCode(10)
// const GenerateGibrish = (...a) => { let b = ChangeCharCode(10)(...a); console.log(b); return b;}
const DegenerateGibrish = ChangeCharCode(-10)
const cipher = function (str) {
  return str.split('').map(GenerateGibrish).join('')
}
const decipher = function (str) {
  return str.split('').map(DegenerateGibrish).join('')
}
export default { cipher, decipher }
