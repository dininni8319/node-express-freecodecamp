const EventEmitter = require('events');

//we are creaating an instance 
const customEmitter = new EventEmitter();

//we are listining for the event
customEmitter.on('response', (name, id) => {
  console.log(`data recieved from the user ${name} with id:${id}`);
})

customEmitter.on('response', (name, id) => {
  console.log(`some other logic here`);
})

//method
//we are emiting the event
customEmitter.emit('response', 'john', 34)