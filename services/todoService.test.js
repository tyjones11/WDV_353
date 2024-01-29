const { todoService, todoServiceById } = require("./todoService");

describe('Todo Service Test', () => {
    test('As a user I should return 200 todos', async () => {
        const result = await todoService();
        expect(result.data).toHaveLength(200)
    });
});