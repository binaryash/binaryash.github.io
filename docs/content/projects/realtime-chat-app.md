## The Concept
A high-performance real-time chat application designed for low-latency communication. It explores the transition from traditional HTTP polling to persistent stateful connections.

### Technical Architecture
* **Django Channels & WebSockets**: Leveraged Django Channels to handle asynchronous WebSocket protocols, allowing for instant bi-directional messaging between clients.
* **State Management**: Utilized **Redis** as the channel layer to manage group communication and message broadcasting across multiple worker processes.
* **Real-Time Features**:
    * **Concurrent Rooms**: Support for multiple isolated chat environments.
    * **Presence Indicators**: Real-time tracking of user online/offline status.
    * **Message Persistence**: Reliable storage and retrieval of chat history using a lightweight PostgreSQL schema.
* **Optimized UI**: The frontend handles real-time state updates efficiently, ensuring the UI remains responsive even during high-frequency message streams.