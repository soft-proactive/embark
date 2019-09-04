class Reporter {
  constructor(reporter) {
    this.reporter = reporter;
  }

  report(_err, payload) {
    switch(payload.type) {
      case 'contract':
        this.contract = payload.value;
        this.file = payload.filename;
        break;
      case 'testPass':
        this.reporter.report(`${this.contract} ${payload.value}`, payload.time, true);
        break;
      case 'testFailure':
        this.reporter.report(`${this.contract} ${payload.value}`, payload.time, false, payload.errMsg);
        break;
      default:
        console.log('dont know how to handle');
        console.dir(payload);
    }
  }
}

module.exports = Reporter;
