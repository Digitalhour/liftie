module.exports = {
  selector: '.lifts tbody tr',
  parse: {
    name: '0/0',
    status: {
      child: '1/0',
      attribute: 'class',
      fn: s => s.split('-').pop()
    }
  }
};
