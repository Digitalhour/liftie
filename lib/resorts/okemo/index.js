module.exports = {
  selector: '#liftsTabContent .report-trail',
  parse: {
    name: 2,
    status: {
      child: '0/0',
      attribute: 'class',
      fn: v => v.split('-').pop()
    }
  }
};
