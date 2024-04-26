const subtractWithPercentage = (numbers) => {
  var totalValue = numbers[numbers.length - 1].split("-")[0];
  var percentValue = numbers[numbers.length - 1].split("-")[1];
  percentValue = percentValue.split("%")[0];

  var percentResult = eval(totalValue * (percentValue / 100)).toString()

  return eval(`${totalValue} - ${percentResult}`).toFixed(2);
}

const sumWithPercent = (numbers) => {
  var totalValue = numbers[numbers.length - 1].split("+")[0];
  var percentValue = numbers[numbers.length - 1].split("+")[1];
  percentValue = percentValue.split("%")[0];

  var percentResult = eval(totalValue * (percentValue / 100)).toString();

  return eval(`${totalValue} + ${percentResult}`).toFixed(2);
}

const squareRoot = (numbers) => {
  var totalValue = numbers[numbers.length - 1].split("√")[0];
  return Math.sqrt(parseFloat(totalValue)).toFixed(2).toString();
}

const operation = (request, response) => {
  try {
    const { numbers } = request.body;

    if (numbers[numbers.length - 1].includes("√")) return squareRoot(numbers);

    if (numbers[numbers.length - 1].includes("%") &&
      numbers[numbers.length - 1].includes("-")) return subtractWithPercentage(numbers);

    if (numbers[numbers.length - 1].includes("%") &&
      numbers[numbers.length - 1].includes("+")) return sumWithPercent(numbers);

    if (numbers[numbers.length - 1].includes("%") &&
      !numbers[numbers.length - 1].includes("-")) return "0";

    if (numbers[numbers.length - 1].includes("%") &&
      !numbers[numbers.length - 1].includes("+")) return "0";

    if (numbers[numbers.length - 1].includes("/0")) return "Não é possível dividir por zero"

    return eval(numbers[numbers.length - 1].toString());

  } catch (error) {
    return response.status(400).json({ message: "Erro ao realizar o cálculo, operação inválida!" }).send();
  }

}

module.exports = { operation };