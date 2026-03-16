function calculateTotal(...numbers) {
  return numbers.reduce((sum, current) => {
    if (typeof current !== 'number' || Number.isNaN(current)) {
      throw new TypeError("Invalid input: All arguments must be numbers");
    }
    return sum + current;
  }, 0);
}