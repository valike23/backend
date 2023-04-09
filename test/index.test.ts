// test/index.test.ts
//import request from 'supertest';
const request = require('supertest');
//import app from '../src/app';
const {ENVIRONMENT} = process.env;
let url = ENVIRONMENT == 'production' ? 'https://liveurl.com' : 'http://localhost:3000';

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(url).get('/');
    expect(response.status).toBe(200);
  });
});