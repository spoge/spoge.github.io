export const calculateMath = (rawInput) => {
  let input = rawInput.split(" ").join("");

  if (!isValid(input)) {
    return "NaN";
  }

  let shouldLogDebug = false;
  logDebug(input, shouldLogDebug);

  while (input.indexOf("(") !== -1) {
    let pStartIndex = input.indexOf("(");
    // Insert * before ( if there is a number directly in front
    if (pStartIndex - 1 >= 0 && !isNaN(input[pStartIndex - 1])) {
      input =
        input.slice(0, pStartIndex) +
        "*" +
        input.slice(pStartIndex, input.length);
      pStartIndex += 1; // move index since we inserted a char
    }
    let substring = input.substring(
      pStartIndex + 1,
      getRelatedIndexOfParenthesesEnd(input, pStartIndex)
    );
    let result = calculateMath(substring);
    if (result === "NaN") {
      return result;
    }
    input = input.split("(" + substring + ")").join(result);
    logDebug(input, shouldLogDebug);
  }

  while (input.indexOf("^") !== -1) {
    input = calcFirstOccurring(input, "^");
    logDebug(input, shouldLogDebug);
  }

  while (input.indexOf("*") !== -1) {
    input = calcFirstOccurring(input, "*");
    logDebug(input, shouldLogDebug);
  }

  while (input.indexOf("/") !== -1) {
    input = calcFirstOccurring(input, "/");
    logDebug(input, shouldLogDebug);
  }

  while (input.indexOf("+") !== -1) {
    input = calcFirstOccurring(input, "+");
    logDebug(input, shouldLogDebug);
  }

  while (input.indexOf("-") !== -1) {
    input = calcFirstOccurring(input, "-");
    logDebug(input, shouldLogDebug);
  }

  return input;
};

const logDebug = (input, shouldLog) => {
  if (shouldLog && isNaN(input)) {
    console.log(input);
  }
};

const isValid = (input) => {
  let parenthesesDepth = 0;
  for (let index = 0; index < input.length; index++) {
    let character = input.charAt(index);
    if (character === "(") {
      parenthesesDepth++;
    } else if (character === ")") {
      parenthesesDepth--;
    } else if (
      isNaN(character) &&
      character !== "+" &&
      character !== "-" &&
      character !== "*" &&
      character !== "/" &&
      character !== "^"
    ) {
      return false;
    }
  }
  return parenthesesDepth === 0;
};

const getRelatedIndexOfParenthesesEnd = (input, parenthesesStart) => {
  let depth = 0;
  for (let index = parenthesesStart + 1; index < input.length; index++) {
    let character = input.charAt(index);
    if (character === ")" && depth === 0) {
      return index;
    } else if (character === ")") {
      depth--;
    } else if (character === "(") {
      depth++;
    }
  }
  return -1;
};

const calcFirstOccurring = (input, operation) => {
  let addIndex = input.indexOf(operation);
  let firstNumberIndex = getStartIndexOfNumberBeforeOperatorIndex(
    input,
    addIndex
  );
  if (firstNumberIndex === -1) {
    return "NaN";
  }
  let firstNumber = input.substring(firstNumberIndex, addIndex).trim();

  let secondNumberIndex = getEndIndexOfNumberAfterOperatorIndex(
    input,
    addIndex
  );
  if (secondNumberIndex === -1) {
    return "NaN";
  }
  let secondNumber = input.substring(addIndex + 1, secondNumberIndex).trim();

  let result = performOperation(firstNumber, secondNumber, operation);

  if (isNaN(result)) {
    return "NaN";
  }

  return (
    input.substring(0, firstNumberIndex) +
    result +
    input.substring(secondNumberIndex, input.length)
  );
};

const performOperation = (a, b, operation) => {
  if (operation === "+") {
    return parseInt(a) + parseInt(b);
  } else if (operation === "-") {
    return parseInt(a) - parseInt(b);
  } else if (operation === "*") {
    return parseInt(a) * parseInt(b);
  } else if (operation === "/") {
    return parseInt(a) / parseInt(b);
  } else if (operation === "^") {
    return Math.pow(parseInt(a), parseInt(b));
  }
};

const getStartIndexOfNumberBeforeOperatorIndex = (input, operatorIndex) => {
  let searching = true;
  let index = operatorIndex - 1;
  while (searching) {
    if (index < 0) {
      searching = false;
      return 0;
    }
    let character = input.charAt(index);
    if (isNaN(character) && character !== " ") {
      searching = false;
      return index + 1;
    }
    index--;
  }
  console.log("ERROR");
  return -1;
};

const getEndIndexOfNumberAfterOperatorIndex = (input, operatorIndex) => {
  let searching = true;
  let index = operatorIndex + 1;
  while (searching) {
    if (index > input.length) {
      searching = false;
      return input.length;
    }
    let character = input.charAt(index);
    if (isNaN(character) && character !== " ") {
      searching = false;
      return index;
    }
    index++;
  }
  console.log("ERROR");
  return -1;
};

export const isMath = (text) => {
  return (
    [...text].filter(
      (c) =>
        !isNaN(c) ||
        ["+", "-", "/", "*", "^", "(", ")", " ", ".", ","].includes(c)
    ).length === text.length
  );
};

// let expression = "((2+4^2)*2+2)";
// console.log(expression);
// console.log(calculateMath(expression));
