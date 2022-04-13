import { describe, expect, test, afterEach } from '@jest/globals';
import { mongoClient, runMongoClient } from '../helpers/mongoClient';

afterEach(() => {
  mongoClient.close();
});

describe('test runMongoClient func', () => {
  test('find user in db', async () => {
    runMongoClient(async () => {
      const database = mongoClient.db('test');
      const users = database.collection('users');
      const query = { name: 'Tom' };
      const user = await users.findOne(query);

      expect(user.name).toBe('Tom');
    });
  });

  test('get ping from admin db', async () => {
    runMongoClient(async () => {
      const db = mongoClient.db('admin');
      // выполняем пинг для проверки подключения
      const result = await db.command({ ping: 1 });

      expect(result.ok).toBe(1);
    });
  });
});
