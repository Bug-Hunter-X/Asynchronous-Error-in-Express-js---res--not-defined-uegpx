# Asynchronous Error in Express.js: 'res' not defined

This repository demonstrates a common asynchronous error in Node.js Express.js applications where the response object ('res') is not accessible after the asynchronous operation completes.  The bug arises from attempting to use the 'res' object after the main function has already completed.

## Bug Description:

The provided 'bug.js' code uses `setTimeout` to simulate an asynchronous operation.  The `res.send()` call is placed inside this `setTimeout` callback function.  When the server receives a request, the callback function does not execute immediately, causing the 'res' object to go out of scope before the actual response is sent.  This leads to an error.

## Solution:

The 'bugSolution.js' file presents a corrected version of the code. It uses promises to properly handle the asynchronous nature of the operation to ensure the response is sent correctly.