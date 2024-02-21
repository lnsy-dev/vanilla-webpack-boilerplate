/*
  Web Worker

  For more information go to:
  https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers

 */

// Use web workers to handle heavy processese
self.addEventListener('message', function(e) {
  // Receive message from the main thread
  const data = e.data;
  // Process the data (this is where your background task goes)
  // For demonstration, let's just send back the received message
  self.postMessage('Received: ' + data);
}, false);
