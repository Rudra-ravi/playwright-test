// @ts-check
const { test, expect } = require('@playwright/test');

test('API GET request test', async ({ request }) => {
  // Make a GET request to a public API
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  
  // Verify the response status
  expect(response.status()).toBe(200);
  
  // Parse the response body
  const body = await response.json();
  
  // Verify the response data
  expect(body.id).toBe(1);
  expect(body.userId).toBe(1);
  expect(body.title).toBeTruthy();
  expect(body.body).toBeTruthy();
});

test('API POST request test', async ({ request }) => {
  // Data to send in the POST request
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };
  
  // Make a POST request
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: data
  });
  
  // Verify the response status
  expect(response.status()).toBe(201);
  
  // Parse the response body
  const body = await response.json();
  
  // Verify the response data
  expect(body.id).toBeTruthy();
  expect(body.title).toBe('foo');
  expect(body.body).toBe('bar');
  expect(body.userId).toBe(1);
});

test('API PUT request test', async ({ request }) => {
  // Data to update
  const data = {
    id: 1,
    title: 'updated title',
    body: 'updated body',
    userId: 1
  };
  
  // Make a PUT request
  const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
    data: data
  });
  
  // Verify the response status
  expect(response.status()).toBe(200);
  
  // Parse the response body
  const body = await response.json();
  
  // Verify the response data
  expect(body.title).toBe('updated title');
  expect(body.body).toBe('updated body');
});

test('API DELETE request test', async ({ request }) => {
  // Make a DELETE request
  const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
  
  // Verify the response status
  expect(response.status()).toBe(200);
  
  // For this API, the response body is empty
  const body = await response.json();
  expect(Object.keys(body).length).toBe(0);
});