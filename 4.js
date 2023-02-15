const exampleText = 'Я вам дам $20 и $64, а так же $23 и $88 ';
let money = [];
for (let i = 0; i < exampleText.length; i++) {
    if (exampleText[i] === '$') {
        money.push(exampleText.slice(i + 1, exampleText.indexOf(' ', i)))
    }
}
console.log(money)