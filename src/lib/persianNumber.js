export function toPersianDigits(n) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  // تبدیل عدد یا رشته به استرینگ و جایگزینی کاراکترها
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}
