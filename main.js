// Do NOT edit nor remove any existing code when testing or submitting
const mainFunction = (input) => {
  let even = 8, odd = 9;
  for (let i = 0; i < input.length - 1; i++) {
    const element = 10 * input[i] + parseInt(input[i + 1]);
    if (element % 2 === 0 && even < element) {
      even = element;
    }
    if (element % 2 === 1 && odd < element) {
      odd = element;
    }
  }
  return [even, odd];
}
  
