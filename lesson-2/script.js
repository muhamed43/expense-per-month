let money = Number(prompt("ваш бюджет на месяц?", ""));
console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

console.log(time);
let messageExpens = prompt(
  "Введите обязательную статью расходов в этом месяце",
  ""
);
let month = 30 || 31;

let messageExpens_2 = Number(prompt("Во сколько обойдется?", ""));

let appData = {
  budget: money,
  timeData: time,
  expenses: {
    firstQ: messageExpens,
    secondQ: messageExpens_2,
  },
  optionalExpenses: null,
  income: [],
  saving: false,
};
console.log(appData);
function sad(money_1, money_2) {
  if (money_1 > money_2) {
    alert("Вы тратите больше чем зарабатываете не советую тратить больше!!!");
  } else {
    alert((appData.budget - appData.expenses.secondQ) / month);
  }
}
sad(appData.expenses.secondQ, appData.budget);
