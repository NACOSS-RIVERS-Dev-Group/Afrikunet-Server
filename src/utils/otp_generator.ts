// import otpGenerator from 'otp-generator';

// export function generateOTP() {
//   return otpGenerator.generate(4, {
//     lowerCaseAlphabets: false,
//     upperCaseAlphabets: false,
//     specialChars: false,
//   });
// }

function generateRandomDigit(): number {
  return Math.floor(Math.random() * 10);
}

export function generateOTP(): string {
  return Array.from({ length: 4 }, generateRandomDigit).join('');
}
