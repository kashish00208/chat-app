#Real-time Chat Web Application
Overview
This project is a real-time chat web application that facilitates instant messaging between a user and the server through WebSocket communication. When a client sends a message to the server, the server immediately sends the same message back to the client. The application is built using a modern frontend stack and Strapi as the backend.

#Features
User Authentication: Users can sign up, log in, and log out of the application.
WebSocket Communication: The server echoes back the messages sent by the client in real time.
Chat Interface: Intuitive interface where users can send and receive messages, and switch between sessions.
Local Database Storage: The chat history and authentication data are stored locally using a database.
Responsive Design: The interface adjusts to various screen sizes and devices, providing a seamless experience.
#Tech Stack
Frontend:
React.js: A JavaScript library for building user interfaces.
Socket.IO Client: For WebSocket communication with the server.
CSS/SCSS: To style the application and ensure responsiveness.
#Backend:
Strapi: A headless CMS for the backend, handling API requests and WebSocket communication.
Socket.IO Server: For managing WebSocket connections and real-time communication.
SQLite/PostgreSQL: For storing user authentication data, chat sessions, and message history
