const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate unique ID', () => {
  const id = generateUniqueId();
  it('should generate unique ID', () => {
    expect(id).toHaveLength(8);
  });
});
