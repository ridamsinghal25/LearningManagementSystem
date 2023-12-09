const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// Difference between Promise.resolve and new Promise()

/*
    Promise.resolve() is a convenient way to create a resolved promise with a 
    specific value, especially when dealing with non-promise values.
    
    The Promise constructor is more versatile as it allows you to define 
    custom asynchronous logic using the resolve and reject functions.
    
    If the provided value to Promise.resolve() is already a promise, it is 
    returned as is. In contrast, using the Promise constructor allows you to 
    create completely new promises with custom behavior.
*/

/* 
    The Promise.resolve() method returns a Promise object that is resolved 
    with the given value. If no value is provided, it returns a Promise 
    object that is resolved with an undefined value. 

    If requestHandler returns a promise, Promise.resolve() has no effect, and 
    the promise is processed as is.
    
    If requestHandler returns a non-promise value, Promise.resolve() wraps it 
    in a resolved promise, allowing the use of catch to handle errors 
    uniformly.
*/
