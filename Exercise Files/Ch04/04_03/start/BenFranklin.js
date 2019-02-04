// var events = require('events');

// var emitter = new events.EventEmitter();

// emitter.on('customEvent', function(message, status){

//     console.log(`${status}: ${message}`);
// });

// emitter.emit('customEvent', 'Hello Ali', 200);

var Person = require('./lib/Person');

var ben = new Person('Ben Franklin');
var ahmed = new Person('Ahmed');

ahmed.on('speak', function(said){
    console.log(`${this.name} -> ${said}`);
});

ben.on('speak', function(said){
    console.log(`${this.name}: ${said}`);
});

ben.emit('speak', 'You may delay, but time will not.');
ahmed.emit('speak', 'Knowledge is power');