let mybalance = 10000; // doller
let mypin = 1234;
let message = "your balnace is";
// mybalance -= 6000
console.log(mybalance + message);
export {};
// let pinAnswer = await inquirer.prompt(
//     [
//         {
//             name: "pin",
//             message: "enter your pin",
//             type: "number",
//         }
//     ]
// );
// // 12345 === 1234 - false 
// if (pinAnswer.pin === mypin){
//     console.log("correct pin code!!");
//     let operationAns = await inquirer.prompt(
//         [
//             {
//                 name: "operation",
//                 message: "please select option",
//                 type: "list",
//                 choices: ["withdraw","check balance"]
//             }
//         ]
//     )
//     console.log(operationAns);
//  if (operationAns.operation === "withdraw"){
//     let amountAns = await inquirer.prompt(
//         [
//             {
//                 name: "amount",
//                 message: "enter your amount",
//                 type: "number"
//             }
//         ]
//     );
//     mybalance -= amountAns.amount
//     console.log("your remaing balance:" + mybalance)
//  }
// }
