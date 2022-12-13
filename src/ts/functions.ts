const arabicNumbers:Array<any> = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
export function convertorPersan( v:any) {
  var chars = v.split('');
  for (var i = 0; i < chars.length; i++) {
    if (/\d/.test(chars[i])) {
      chars[i] = arabicNumbers[chars[i]];
    }
  }
  return chars.join('');
}
export function convertorPrice (labelValue: number) {

  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e+9

  ?  ['میلیارد تومان' , convertorPersan(`${(Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2)}`)]
  // Six Zeroes for Millions 
  : Math.abs(Number(labelValue)) >= 1.0e+6

  ? [` میلیون تومان `, convertorPersan(`${(Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2)}`)]
  // Three Zeroes for Thousands
  : Math.abs(Number(labelValue)) >= 1.0e+3

  ? [` هزار تومان `, convertorPersan(`${(Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2)}`)]

  : [` تومان `, convertorPersan(`${Math.abs(Number(labelValue))}`)];
}