# Brief explanation
This project is a command-line trigonometry calculator built with JavaScript.
It helps users calculate side lengths, trigonometric ratios (sin, cos, tan), and angles in right-angled triangles using notable angles (30°, 45°, 60°) or custom inputs.

## Features
### Side Length Calculation
Calculates the missing side (```opposite```, ```adjacent```, or ```hypotenuse```) when a notable angle and another side are known.
<br>
### Trigonometric ratios
Calculates ```sin```, ```cos```, or ```tan``` from given side lengths.
<br>
### Inverse Trigonometric Functions
Automatically finds the angle (θ) using inverse functions (```asin```, ```acos```, or ```atan```) when a trig ratio is given.
<br>
### Rounding
Supports rounding of calculated angles for ease of interpretation.

## How it works
### 1. The program prompts the user for:
-What they want to calculate (side or trig ratio);
<br>
-What value they already have (optional for trig ratios);
<br>
-The value of the angle (optional for ratios).

### 2. Based on the provided inputs, it selects the appropriate formula using:
-```sin(θ) = opposite / hypotenuse```
<br>
-```cos(θ) = adjacent / hypotenuse```
<br>
-```tan(θ) = opposite / adjacent```

### 3. Inverse
For inverse calculations, it uses ```Math.asin```, ```Math.acos```, or ```Math.atan``` and converts the angle from radians to degrees.

# This program will be updated in the future, but for now run it on the console of your browser. Refresh it to restart
