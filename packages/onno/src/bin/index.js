import Program from 'commander'
import Package from '../../package'

Program
  .version(Package.version)
  .option('-p, --peppers', 'Add peppers')
  .option('-o, --onions', 'Add onions')
  .option('-c, --cheese [type]', 'Specify cheese', 'Chedder')
  .parse(process.argv)

console.log('You ordered a pizza with:')
if (Program.peppers) console.log(' - Peppers')
if (Program.onions) console.log(' - Onions')
console.log(' - %s cheese', Program.cheese)
