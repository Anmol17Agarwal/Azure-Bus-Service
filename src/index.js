import { ServiceBusClient } from '@azure/service-bus';
import { promisify } from 'util';

import { CONFIG } from './settings';

/**
 * Main function to run the subscriber.
 */
async function main() {
  const servicebus = new ServiceBusClient(CONFIG.connectionString);
  const sender = servicebus.createSender('myqueue');
  await sender.sendMessages({
    body: 'Hello, world!',
    applicationProperties: { 'my-property': 'my-value' },
  });
  console.log('Message sent');
  await sender.close();
  const reciever = servicebus.createReceiver('myqueue');
  console.log('Waiting for messages...');
  // const messages = reciever.receiveMessages(5, { maxWaitTimeInMs: 10000 });
  // for (const message of messages) {
    // console.log(`Message Recieved: ${message.body}`);
    // await reciever.completeMessage(message);
  // }
  reciever.subscribe({
    async processMessage(message) {
      console.log(`Process Message: ${message.body}`);
    },
    async processError(args) {
      console.log(args.error);
    },
  }, { maxConcurrentCalls: 1, autoCompleteMessages: true });
  const delay = promisify(setTimeout);
  await delay(10000);
  await reciever.close();
  console.log('Process Complete');
  await servicebus.close();
  process.exit(0);
}

main();
