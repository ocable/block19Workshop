// === Type Definitions ===
/**
 * @typedef {Object} Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {string} price
 */

/**
 * @typedef {Freelancer[]} allFreelancers
 * */

// State:

const names = ["Alice", "Bob", "Carol"];
const occupations = ["Writer", "Teacher", "Programmer"];
const prices = [30, 50, 70];

/** @type {Freelancer[]} allFreelancers */

const allFreelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 30 },
];

function addFreelancer(names, occupations, prices) {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const price = prices[Math.floor(Math.random() * prices.length)];

  allFreelancers.push({ name, occupation, price });
}

/**
 *
 * @param {} allFreelancers
 */
function render(allFreelancers) {
  const tbody = document.querySelector("tbody");

  const $freeLancers = allFreelancers.map((freeLancer) => {
    const $freeLancer = document.createElement("tr");

    const $freeLancerName = document.createElement("td");
    $freeLancerName.textContent = freeLancer.name;
    $freeLancer.appendChild($freeLancerName);

    const $freeLancerOccu = document.createElement("td");
    $freeLancerOccu.textContent = freeLancer.occupation;
    $freeLancer.appendChild($freeLancerOccu);

    const $freeLancerPrice = document.createElement("td");
    $freeLancerPrice.textContent = freeLancer.price;
    $freeLancer.appendChild($freeLancerPrice);

    return $freeLancer;
  });

  const $average = document.querySelector("p");
  $average.textContent = `The average price is: ${average(allFreelancers)}`;

  tbody.replaceChildren(...$freeLancers);
}

function average(array) {
  let sum = array.reduce((acc, freelancer) => (acc += freelancer.price), 0);
  return Math.floor(sum / array.length);
}

setInterval(() => {
  addFreelancer(names, occupations, prices);
  render(allFreelancers);
}, 1000);
