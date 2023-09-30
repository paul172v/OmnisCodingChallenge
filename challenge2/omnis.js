import * as nameGenerator from "../challenge1/generateNames.mjs";

let counter = 0;

const triggerNameGenerator = () => {
  const nameCountValue = document.getElementById("inputNameCount").value;
  const filteredName = document.getElementById("inputNameFilter").value;
  counter = 0;

  //// Trigger the function and get a list of names
  const namesArr = nameGenerator.generateNames(nameCountValue);

  //// Reset the names wrapper in the DOM
  const namesWrapper = document.getElementById("names-wrapper");
  namesWrapper.innerHTML = "";

  //// Go through each name in the list, increase the counter and add a name on the DOM
  namesArr.length > 0 &&
    namesArr.map((el) => {
      if (!filteredName) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${Number(counter++) + 1}: ${el.firstName} ${
          el.lastName
        }`;
        document.getElementById("names-wrapper").appendChild(listItem);
      }

      if (
        (filteredName && el.firstName.includes(filteredName)) ||
        el.lastName.includes(filteredName)
      ) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${Number(counter++) + 1}: ${el.firstName} ${
          el.lastName
        }`;
        document.getElementById("names-wrapper").appendChild(listItem);
      }
    });
};

const triggerGetMaximumCombinations = () => {
  counter = 0;

  //// Reset the names wrapper in the DOM
  const namesWrapper = document.getElementById("names-wrapper");
  namesWrapper.innerHTML = "";

  //// Find the max number of name combinations
  const maxNames = nameGenerator.getMaxNames();

  //// Use the name generator putting maxNames as the argument
  const namesArr = nameGenerator.generateNames(maxNames);

  //// Go through each name in the array and add the name on the DOM
  namesArr.length > 0 &&
    namesArr.map((el) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `${Number(counter++) + 1}: ${el.firstName} ${
        el.lastName
      }`;
      document.getElementById("names-wrapper").appendChild(listItem);
    });
};

////// Event listeners
document
  .getElementById("btnGenerateNames")
  .addEventListener("click", triggerNameGenerator);

document
  .getElementById("btnGetMaxPossibleCombinations")
  .addEventListener("click", triggerGetMaximumCombinations);

triggerNameGenerator(100);
