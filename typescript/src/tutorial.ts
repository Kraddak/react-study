function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);

function calculateScore(initialScore: number, penalty: number = 0): number {
  return initialScore - penalty;
}
let scoreAfterPenalty = calculateScore(100, 20);
let scoreNoPenalty = calculateScore(300);

function sum(message: string, ...numbers: number[]): string {
  console.log(numbers);
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((prev, acc) => prev + acc, 0);
  return `${message}${total}`;
}

let result = sum(`The total is : `, 1, 2, 3, 4, 5);
console.log(result);

//

interface Props {
  par1: string;
  par2?: string;
}

export default function testFunc({ par1, par2 }: Props): string {
  return `A: ${par1} - ${par2}`;
}

console.log(testFunc({ par1: "aa", par2: "bb" }));
console.log(testFunc({ par1: "aa" }));
