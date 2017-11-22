var figlet = require('figlet');
const chalk = require('chalk');


// console.log(chalk.blue('Hello world!'));


// var text = '';
// figlet('Hello World!!', function(err, data) {
//    if (err) {
//        console.log('Something went wrong...');
//        console.dir(err);
//        return;
//    }
//    console.log(chalk.yellow.bgBlue.bold(data));
   
// });

figlet('Hello Word', {
    font: 'Block',
    horizontalLayout: "universal smushing",
    verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.yellow.bgBlue.bold(data));
});


