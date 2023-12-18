// const x = '1'
// const y = '2'

// console.log('I am %s and my age is %d', 'Paks', 30)

const ProgressBar = require("progress");

const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas", {
  total: 20,
});

const timer = setInterval(() => {
  bar.tick();

  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);

const chalk = require('chalk')
console.log(chalk.green('This is nodeJs tutorial'))
