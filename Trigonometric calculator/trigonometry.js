let sin30 = 0.5;
let sin45 = Math.sqrt(2)/2;
let sin60 = Math.sqrt(3)/2;

let cos30 = Math.sqrt(3)/2;
let cos45 = Math.sqrt(2)/2;
let cos60 = 0.5;

let tan30 = Math.sqrt(3)/3;
let tan45 = 1;
let tan60 = Math.sqrt(3);


//CALCULATE LENGTH GIVEN A NOTABLE ANGLE

function calculateHypHasOppAngle30() { 
  let opp = Number(prompt("Opposite side length:")); 
  return opp/sin30; 
} 

function calculateHypHasAdjAngle30() { 
  let adj = Number(prompt("Adjascent side length:")); 
  return adj/cos30; 
}

function calculateAdjHasOppAngle30() { 
  let opp = Number(prompt("Opposite side length:")); 
  return opp/tan30; 
}

function calculateOppHasAdjAngle30() { 
  let adj = Number(prompt("Adjacent side length:")); 
  return adj*tan30; 
} 

function calculateOppHasHypAngle30() { 
  let hyp = Number(prompt("Hypotenuse length:")); 
  return hyp*sin30; 
}

function calculateAdjHasHypAngle30() { 
  let  hyp = Number(prompt("Hypotenuse length:")); 
  return hyp*cos30; 
}


function calculateHypHasOppAngle45() {
  let opp = Number(prompt("Opposite side length:"));
  return opp/sin45;
}

function calculateHypHasAdjAngle45() {
  let adj = Number(prompt("Adjacent side length:"));
  return adj/cos45;
}

function calculateAdjHasOppAngle45() {
  let opp = Number(prompt("Opposite side length:"));
  return opp/tan45;
}

function calculateOppHasAdjAngle45() {
  let adj = Number(prompt("Adjacent side length:"));
  return adj*tan45;
}

function calculateOppHasHypAngle45() {
  let hyp = Number(prompt("Hypotenuse:"));
  return hyp*sin45;
}

function calculateAdjHasHypAngle45() {
  let hyp = Number(prompt("Hypotenuse:"));
  return hyp*cos45;
}


function calculateHypHasOppAngle60() {
  let opp = Number(promprt("Opposite side length:"));
  return opp/sin60;
}

function calculateHypHasAdjAngle60() {
  let adj = Number(prompt("Adjacent side length:"));
  return adj/cos60;
}

function calculateAdjHasOppAngle60() {
  let opp = Number(prompt("Opposite side length:"));
  return opp/tan60;
}

function calculateOppHasAdjAngle60() {
  let adj = Number(prompt("Adjacent side length:"));
  return adj*tan60;
}

function calculateOppHasHypAngle60() {
  let hyp = Number(prompt("Hypotenuse:"));
  return hyp*sin60;
}

function calculateAdjHasHypAngle60() {
  let hyp = Number(prompt("Hypotenuse:"));
  return hyp*cos60;
}

//CALCULATE SIN/COS/TAN

function calculateSin() {
  let opp = Number(prompt("Opposite side length:"));
  let hyp = Number(prompt("Hypotenuse:"));

  return opp/hyp;
}

function calculateCos() {
  let adj = Number(prompt("Adjacent side length:"));
  let hyp = Number(prompt("Hypotenuse:"));

  return adj/hyp;
}

function calculateTan() {
  let opp = Number(prompt("Opposite side length:"));
  let adj = Number(prompt("Adjacent side length:"));

  return opp/adj;
}

function calculateAngle(finalAnswer, xquestion) {
  let angleInRadians;

//DETERMINE WHICH INVERSE TRIGONOMETRIC FUNCTION TO USE
  if (xquestion === "sin") {
      angleInRadians = Math.asin(finalAnswer);
  } else if (xquestion === "cos") {
      angleInRadians = Math.acos(finalAnswer);
  } else if (xquestion === "tan") {
      angleInRadians = Math.atan(finalAnswer);
  } else {
      throw new Error("Invalid ratio type. Use 'sin', 'cos', or 'tan'.");
  }

  //RADIANS -> DEGREES CONVERTER
  const angleInDegrees = angleInRadians * (180 / Math.PI);

  return angleInDegrees;
}


console.log(`Opposite side = 'opp'
Adjacent side = 'adj'
Hypotenuse = 'hyp'
Sin = 'sin'
Cossine = 'cos'
Tangent = 'tan'`);

let xquestion = prompt("What would you like to calculate?");
let lengthType = prompt("What length do you already have? (If you are calculating sin/cos/tan skip this question)");
let angle = Number(prompt("What's the value of the theta(in degrees)? (if it's not notable skip this question)"));
let angleQuestion;
let angleValue;
let roundValue;
let finalAnswer;

if(xquestion === 'hyp' && lengthType === 'opp' && angle === 30) {
  finalAnswer = calculateHypHasOppAngle30();
  console.log(finalAnswer);
} else if (xquestion === 'hyp' && lengthType === 'adj' && angle === 30) {
  finalAnswer = calculateHypHasAdjAngle30();
  console.log(finalAnswer);
} else if (xquestion === 'adj' && lengthType === 'opp' && angle === 30) {
  finalAnswer = calculateAdjHasOppAngle30();
  console.log(finalAnswer);
} else if (xquestion === 'opp' && lengthType === 'adj' && angle === 30) {
  finalAnswer = calculateOppHasAdjAngle30();
  console.log(finalAnswer);
} else if (xquestion === 'opp' && lengthType === 'hyp' && angle === 30) {
  finalAnswer = calculateOppHasHypAngle30();
  console.log(finalAnswer);
} else if (xquestion === 'adj' && lengthType === 'hyp' && angle === 30) {
  finalAnswer = calculateAdjHasHypAngle30();
  console.log(finalAnswer);
}

else if (xquestion === 'hyp' && lengthType === 'opp' && angle === 45) {
  finalAnswer = calculateHypHasOppAngle45();
  console.log(finalAnswer);
} else if (xquestion === 'hyp' && lengthType === 'adj' && angle === 45) {
  finalAnswer = calculateHypHasAdjAngle45();
  console.log(finalAnswer);
} else if (xquestion === 'adj' && lengthType === 'opp' && angle === 45) {
  finalAnswer = calculateAdjHasOppAngle45();
  console.log(finalAnswer);
} else if (xquestion === 'opp' && lengthType === 'adj' && angle === 45) {
  finalAnswer = calculateOppHasAdjAngle45();
  console.log(finalAnswer);
} else if (xquestion === 'opp' && lengthType === 'hyp' && angle === 45) {
  finalAnswer = calculateOppHasHypAngle45();
  console.log(finalAnswer);
} else if (xquestion === 'adj' && lengthType === 'hyp' && angle === 45) {
  finalAnswer = calculateAdjHasHypAngle45();
  console.log(finalAnswer);
}

else if (xquestion === 'hyp' && lengthType === 'opp' && angle === 60) {
  finalAnswer = calculateHypHasOppAngle60();
  console.log(finalAnswer);
} else if (xquestion === 'hyp' && lengthType === 'adj' && angle === 60) {
  finalAnswer = calculateHypHasAdjAngle60();
  console.log(finalAnswer);
} else if (xquestion === 'adj' && lengthType === 'opp' && angle === 60) {
  finalAnswer = calculateAdjHasOppAngle60();
  console.log(finalAnswer);
} else if (xquestion === 'opp' && lengthType === 'adj' && angle === 60) {
  finalAnswer = calculateOppHasAdjAngle60();
  console.log(finalAnswer);
} else if (xquestion === 'opp' && lengthType === 'hyp' && angle === 60) {
  finalAnswer = calculateOppHasHypAngle60();
  console.log(finalAnswer);
} else if (xquestion === 'adj' && lengthType === 'hyp' && angle === 60) {
  finalAnswer = calculateAdjHasHypAngle60();
  console.log(finalAnswer);

} else if (xquestion === 'sin') {
  finalAnswer = calculateSin();
  let angleQuestion = prompt('Would you like to know the value of theta? y/n');
  if (angleQuestion === 'y') {
    angleValue = calculateAngle(finalAnswer, xquestion);
    let roundValue = prompt('Would you like to round up the value? y/n');
    if (roundValue === 'y') {
      console.log(`Theta(rounded value): `,Math.round(angleValue));
    } else {
      console.log(`Theta: `,angleValue);
    }
  }
  console.log(`Sin: `,finalAnswer);

} else if (xquestion === 'cos') {
  finalAnswer = calculateCos();
  let angleQuestion = prompt('Would you like to know the value of theta? y/n');
  if (angleQuestion === 'y') {
    angleValue = calculateAngle(finalAnswer, xquestion);
    let roundValue = prompt('Would you like to round up the value? y/n');
    if (roundValue === 'y') {
      console.log(`Theta(rounded value): `,Math.round(angleValue));
    } else {
      console.log(`Theta: `,angleValue);
    }
  }
  console.log(`Cos: `,finalAnswer);

} else if (xquestion === 'tan') {
  finalAnswer = calculateTan();
  let angleQuestion = prompt('Would you like to know the value of theta? y/n');
  if (angleQuestion === 'y') {
    angleValue = calculateAngle(finalAnswer, xquestion);
    let roundValue = prompt('Would you like to round up the value? y/n');
    if (roundValue === 'y') {
      console.log(`Theta(rounded value): `,Math.round(angleValue));
    } else {
      console.log(`Theta: `,angleValue);
    }
  }
  console.log(`Tan: `,finalAnswer);
}

else {
  console.log("Invalid or insuficient values were incerted :/");
}

//IF I HAVE THE SINE OF AN ANGLE, HOW CAN I FIND ITS COSINE? AND TANGENT?...