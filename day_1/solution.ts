const file = Bun.file("./day_1/data.txt");
const textFile = await file.text();
const lines = textFile.trim().split("\n");

const leftList: number[] = [];
const rightList: number[] = [];

// Part 1
function calculateTotalDistance(
  leftList: number[],
  rightList: number[]
): number {
  for (const line of lines) {
    const [left, right] = line.trim().split(/\s+/).map(Number);
    leftList.push(left);
    rightList.push(right);
  }
  leftList.sort((a, b) => a - b);
  rightList.sort((a, b) => a - b);

  let totalDistance = 0;

  for (let i = 0; i < leftList.length; i++) {
    const distance = Math.abs(leftList[i] - rightList[i]);
    totalDistance += distance;
  }
  return totalDistance;
}

// Part 2
function calculateSimilarityScore(
  leftList: number[],
  rightList: number[]
): number {
  const frequencyMap = new Map<number, number>();

  for (const num of rightList) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  let similarityScore = 0;

  for (const num of leftList) {
    const frequency = frequencyMap.get(num) || 0;
    similarityScore += num * frequency;
  }

  return similarityScore;
}

console.log("Total Distance:", calculateTotalDistance(leftList, rightList));
console.log("Similarity Score:", calculateSimilarityScore(leftList, rightList));

export {};
