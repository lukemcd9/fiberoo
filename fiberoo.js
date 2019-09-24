function fib() {
  let prev = 0;
  let current = 1;
  const nums = [prev, current];
  for (let i = 0; i < 48; i++) {
    const temp = prev + current;
    nums.push(temp);
    prev = current;
    current = temp;
  }
  return nums;
}

console.log(fib());

function numsToString(nums) {
  return _.map(nums, (number) => `${number}`);
}

console.log(numsToString(fib()));

function numsEvenNums(nums) {
  return _.size(_.filter(nums, (number) => number % 2 === 0));
}

console.log(numsEvenNums(fib()));
