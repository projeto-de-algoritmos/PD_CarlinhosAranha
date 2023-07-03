export function getLista(items, limit) {
  items = items.reduce(
    (acc, curr) => [...acc, { ...curr, weight: curr.distance * 2 }],
    []
  );

  items = items.sort((a, b) => {
    return b.urgency - a.urgency;
  });

  var m = Array(items.length + 1); // Increase array size by 1

  for (var i = 0; i <= items.length; i++) { // Modify loop condition
    m[i] = Array(limit + 1).fill(0); // Initialize array with zeros
  }

  for (var item = 1; item <= items.length; item++) { // Modify loop condition
    for (var weight = 1; weight <= limit; weight++) {
      if (items[item - 1].weight > weight) { // Adjust index
        m[item][weight] = m[item - 1][weight];
      } else {
        m[item][weight] = Math.max(
          items[item - 1].urgency + m[item - 1][weight - items[item - 1].weight], // Adjust index
          m[item - 1][weight]
        );
      }
    }
  }

  var solution = getSolution(items, limit, m);
  console.log(solution);

  return items.reduce(
    (acc, curr, index) =>
      solution?.some((item) => item === index + 1) ? [...acc, curr] : acc, // Adjust index
    []
  );
}

function getSolution(items, limit, m) {
  var weight = limit;
  var solution = [];

  for (var item = items.length; item > 0; item--) { // Modify loop condition
    if (m[item][weight] !== m[item - 1][weight]) {
      solution.push(item - 1); // Adjust index
      weight = weight - items[item - 1].weight; // Adjust index
    }
  }

  return solution;
}