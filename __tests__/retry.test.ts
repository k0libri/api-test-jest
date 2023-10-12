jest.retryTimes(3, {logErrorsBeforeRetry: true});

test('will fail', () => {
  expect(true).toBe(false);
});