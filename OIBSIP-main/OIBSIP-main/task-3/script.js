function convertTemp() {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const resultDiv = document.getElementById("result");

  if (isNaN(temp)) {
    resultDiv.innerHTML = "Please enter a valid number!";
    return;
  }

  let result = "";

  if (unit === "Celsius") {
    const toF = (temp * 9/5) + 32;
    const toK = temp + 273.15;
    result = `${temp}°C = ${toF.toFixed(2)}°F = ${toK.toFixed(2)}K`;
  } else if (unit === "Fahrenheit") {
    const toC = (temp - 32) * 5/9;
    const toK = (temp - 32) * 5/9 + 273.15;
    result = `${temp}°F = ${toC.toFixed(2)}°C = ${toK.toFixed(2)}K`;
  } else if (unit === "Kelvin") {
    const toC = temp - 273.15;
    const toF = (temp - 273.15) * 9/5 + 32;
    result = `${temp}K = ${toC.toFixed(2)}°C = ${toF.toFixed(2)}°F`;
  }

  resultDiv.innerHTML = result;
}
