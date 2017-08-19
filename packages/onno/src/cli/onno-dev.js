module.exports = {
  command: 'dev',
  aliases: '*',
  describe: 'Run app using the development server',
  handler(argv) {
    console.log('dev', argv)
  }
}
