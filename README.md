## AZURE-BUS-Serivce
Azure Service Bus queues, topics, and subscriptions are all messaging constructs that can be used to send and receive messages between applications. They are all durable, meaning that messages are not lost if an application crashes or restarts.

### Queues----
A queue is a logical entity that stores messages until they are received by a consumer.
Messages are stored in a queue in the order in which they are sent.
Messages are dequeued (removed from the queue) by consumers.
Consumers can be applications, services, or other entities that need to receive messages.
Queues are durable, meaning that messages are not lost if an application crashes or restarts.
You can create queues using the Azure portal, PowerShell, CLI, or ARM templates.
You can send and receive messages using clients written in C#, Java, Python, or JavaScript.

![](https://github.com/Anmol17Agarwal/AzureTask/blob/main/resources/about-service-bus-queue%20(1).png)


### Topics----
A topic is a logical entity that allows multiple subscribers to receive messages.
Messages are sent to a topic by publishers.
Subscribers can receive messages from a topic by subscribing to the topic.
Subscriptions are logical entities that define which messages a subscriber will receive.
Subscriptions can be configured to filter messages, so that only certain messages are received.
Topics are durable, meaning that messages are not lost if an application crashes or restarts.



### Subscriptions----
A subscription is a logical entity that defines which messages a subscriber will receive from a topic.
Subscriptions can be configured to filter messages, so that only certain messages are received.
Subscriptions can be configured to receive messages in a variety of ways, such as receiving all messages, receiving only new messages, or receiving only messages that match certain criteria.
Subscriptions are durable, meaning that they are not lost if an application crashes or restarts.
![](https://github.com/Anmol17Agarwal/AzureTask/blob/main/resources/about-service-bus-queue%20(1).png)

**Benefits**
Durability: Messages are not lost if an application crashes or restarts.
Reliability: Messages are delivered reliably, even if there are network failures.
Scalability: Azure Service Bus can scale to handle large numbers of messages.
Security: Azure Service Bus provides a variety of security features to protect your messages.


### Durability: Messages are not lost if an application crashes or restarts.
Reliability: Messages are delivered reliably, even if there are network failures.
Scalability: Azure Service Bus can scale to handle large numbers of messages.
Security: Azure Service Bus provides a variety of security features to protect your messages.

![](https://github.com/Anmol17Agarwal/AzureTask/blob/main/resources/Screenshot%202023-08-02%20121637.png)

### Added ScreenShot of Azure Portal With stats
![](https://github.com/Anmol17Agarwal/AzureTask/blob/main/resources/Screenshot%202023-08-08%20115113.png)



