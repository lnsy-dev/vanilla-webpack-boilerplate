// Use web workers to handle heavy processese
self.addEventListener('message', function(e) {
  // Receive message from the main thread
  const data = e.data;
  // Process the data (this is where your background task goes)
  // For demonstration, let's just send back the received message
  self.postMessage('Received: ' + data);
}, false);
