var figlet = require('figlet');
const chalk = require('chalk');


// console.log(chalk)
// const helloBlue = (str) => chalk.blue(str)


// const helloRed = (str) => chalk.red(str)


const stringToColor = (str,color) =>  {
    return chalk[color](str)
}
    

console.log(stringToColor('this is a test', 'red'))


//  const evensBlueOddsYellow = (str) => {
//     var strArr = str.split(' ').map((elem, index) => 
//        index % 2 === 0 ? chalk.blue(elem) : chalk.yellow(elem)
//     )
//     return strArr.join(' ')
//  }
   


        
// console.log(evensBlueOddsYellow('this is a test'))
 

// const angryText = (str) => {
//     return chalk.red.underline.bold(str.toUpperCase())
// }

// console.log(angryText('blue'))


// const backgroundCyan = (str) => {
//     return chalk.white.bgCyan(str)
// }

// console.log(backgroundCyan('bluearegarg'))


// const boldFirstUnderlineLast = (str) => {
//     strArr = str.split(' ')
//     strArr[0] = chalk.bold(strArr[0])
//     strArr[strArr.length - 1] = chalk.underline(strArr[strArr.length - 1])
    
// //  var changed = chalk.bold(strArr[0]) + ' ' +  strArr.slice(1,-1).join(' ') + ' ' + chalk.underline(strArr.slice(-1))
//   return strArr.join(' ')
// }

// console.log(boldFirstUnderlineLast('there are raergaeronraepgor aregaewrnigaer ggerweal people'))


// const commandLineChalk = () => {
//    var text = process.argv.slice(3).join(' ')
// //   console.log(chalk.bold.keyword(process.argv[2])(text))
//     // console.log(text)
//       console.log(chalk[process.argv[2]].bold.bgBlue(text))
   

// }

// commandLineChalk()



