/**
 * This should return an array of objects, of the form:
		{
			"firstName": "XXX",
			"lastName": "YYY"
		}

 * Where firstName and lastName are randomly generated in some fashion.
 * There should be no duplicates (where first name AND last name match another record).
 */

//// Arrays - These lists can be added or subtracted to and the rest of the program should account for that.
const firstNamesArr = [
  "Alex",
  "Ben",
  "Charlie",
  "Daniel",
  "Eliza",
  "Francis",
  "Gordon",
  "Hanna",
  "Isabella",
  "James",
  "Kenny",
  "Luke",
  "Mark",
  "Nathan",
  "Ottavia",
  "Patrick",
  "Quinton",
  "Richard",
  "Stephen",
  "Ted",
  "Uma",
  "Victor",
  "Walter",
  "Xander",
  "Yvette",
  "Zoe",
];

const lastNamesArr = [
  "Ashford",
  "Barton",
  "Cox",
  "Dalton",
  "Everett",
  "Frost",
  "Gordon",
  "Holden",
  "Irvin",
  "Jones",
  "Kelly",
  "Morrison",
  "Nichols",
  "Olson",
  "Parker",
  "Quinn",
  "Reed",
  "Stone",
  "Thorn",
  "Underwood",
  "Vaughn",
  "Watson",
  "Xavier",
  "Yates",
  "Zabinski",
];

////// My understanding from the question is that we are supposed to have a unique full name
////// (no cases where first AND last name match another record as opposed to first OR last name),
////// so that there are more possible combinations in case someone tried to brute force this.
////// If we were supposed to have unique first names as well as unique last names then I apologize for the misunderstanding.

function generateAllPossibleNames() {
  const allPossibleNames = [];

  for (let firstName of firstNamesArr) {
    for (let lastName of lastNamesArr) {
      allPossibleNames.push({ firstName, lastName });
    }
  }

  return allPossibleNames;
}

const getRandomNameAndRemove = (list) => {
  const randomIndex = Math.floor(Math.random() * list.length);
  const name = list[randomIndex];
  list.splice(randomIndex, 1); // remove the name from the list to avoid duplicates
  return name;
};

const generateNames = (count) => {
  const finalNamesArr = [];
  const allNames = generateAllPossibleNames();

  const maxCombinations = allNames.length;

  if (firstNamesArr.length === 0 || lastNamesArr.length === 0) {
    console.log(`One or both lists of names is empty.`);
    alert(`One or both lists of names is empty.`);
    return;
  } else if (count > maxCombinations) {
    return generateNames(maxCombinations);
  } else {
    if (!count) count = Math.min(100, maxCombinations);

    for (let i = 0; i < count && allNames.length > 0; i++) {
      const name = getRandomNameAndRemove(allNames);
      finalNamesArr.push(name);
    }

    return finalNamesArr;
  }
};

const getMaxNames = () => {
  const maxCombinations = firstNamesArr.length * lastNamesArr.length;

  return maxCombinations;
};

export { generateNames, getMaxNames };
