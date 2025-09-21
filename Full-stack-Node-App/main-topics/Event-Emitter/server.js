import { EventEmitter } from "node:events"
const customerDetails = {
  fullName: 'Meryl Sheep',
  email: 'baah@thedevilwearswool.com',
  phone: 12345678910
}

// create the emitter
const generateEmailEmitter = new EventEmitter()
// define the listener function
function generateEmail(customer) {
  console.log(`email generated for ${customer.email}`);

}
// register the listener
generateEmailEmitter.on("emailRequest", generateEmail)

// emit the event
generateEmailEmitter.emit("emailRequest", customerDetails)