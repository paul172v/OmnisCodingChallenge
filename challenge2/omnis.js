import * as nameGenerator from "../challenge1/generateNames.mjs";

let counter = 0;

const triggerNameGenerator = () => {
  const nameCountValue = document.getElementById("inputNameCount").value;
  const placeHolderFilteredName =
    document.getElementById("inputNameFilter").value;
  const firstLetter = placeHolderFilteredName.slice(0, 1);
  const restOfName = placeHolderFilteredName.slice(1);

  const filteredName = firstLetter.toUpperCase() + restOfName;

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
        // create a list item
        const listItem = document.createElement("li");

        // add an ID to the li
        listItem.setAttribute("id", `${el.firstName}_${el.lastName}`);

        // create a span element
        const span = document.createElement("span");

        // add the tooltip class to the span
        span.setAttribute("class", "tooltip");

        // insert the phone number into the span
        span.innerHTML = el.phoneNumber;

        // insert the name into the list item
        listItem.innerHTML = `${Number(counter++) + 1}: ${el.firstName} ${
          el.lastName
        }`;

        // append the li into the names-wrapper
        document.getElementById("names-wrapper").appendChild(listItem);
        document
          .getElementById(`${el.firstName}_${el.lastName}`)
          .appendChild(span);

        // Add click event listener to the li
        listItem.addEventListener("click", function () {
          // Toggle visibility of the span
          const spanStyle = span.style.display;
          span.style.display =
            spanStyle === "none" || spanStyle === "" ? "inline" : "none";
        });
      } else if (
        (filteredName && el.firstName.includes(filteredName)) ||
        el.lastName.includes(filteredName)
      ) {
        // create a list item
        const listItem = document.createElement("li");

        // add an ID to the li
        listItem.setAttribute("id", `${el.firstName}_${el.lastName}`);

        // create a span element
        const span = document.createElement("span");

        // add the tooltip class to the span
        span.setAttribute("class", "tooltip");

        // insert the phone number into the span
        span.innerHTML = el.phoneNumber;

        // insert the name into the list item
        listItem.innerHTML = `${Number(counter++) + 1}: ${el.firstName} ${
          el.lastName
        }`;

        // append the li into the names-wrapper
        document.getElementById("names-wrapper").appendChild(listItem);
        document
          .getElementById(`${el.firstName}_${el.lastName}`)
          .appendChild(span);

        // Add click event listener to the li
        listItem.addEventListener("click", function () {
          // Toggle visibility of the span
          const spanStyle = span.style.display;
          span.style.display =
            spanStyle === "none" || spanStyle === "" ? "inline" : "none";
        });
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
      // create a list item
      const listItem = document.createElement("li");

      // add an ID to the li
      listItem.setAttribute("id", `${el.firstName}_${el.lastName}`);

      // create a span element
      const span = document.createElement("span");

      // add the tooltip class to the span
      span.setAttribute("class", "tooltip");

      // insert the phone number into the span
      span.innerHTML = el.phoneNumber;

      // insert the name into the list item
      listItem.innerHTML = `${Number(counter++) + 1}: ${el.firstName} ${
        el.lastName
      }`;

      // append the li into the names-wrapper
      document.getElementById("names-wrapper").appendChild(listItem);
      document
        .getElementById(`${el.firstName}_${el.lastName}`)
        .appendChild(span);

      // Add click event listener to the li
      listItem.addEventListener("click", function () {
        // Toggle visibility of the span
        const spanStyle = span.style.display;
        span.style.display =
          spanStyle === "none" || spanStyle === "" ? "inline" : "none";
      });
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
