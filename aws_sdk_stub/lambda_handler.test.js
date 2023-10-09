const { handler } = require('./lambda_handler');

describe('handler function', () => {
  it('should return "Hello World!"', () => {
    expect(handler()).toBe('Hello World!');
  });
});
