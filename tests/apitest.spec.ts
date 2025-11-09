/**
 * With an API request method there is a response with a status code. HTTP status codes are three-digit numbers returned by a web server in response to a client's request made to the server. They provide information about the result of the request and help both the client and server understand how to proceed.
 * Response Status Codes and examples (this is not a full list):
 * - 1xx (Informational) – 100 Continue, 101 Switching
 * - 2xx (Successful response) – 200 OK, 201 Created
 * - 3xx (Redirection messages) - 300 Multiple Choices, 301 Moved Permanently
 * - 4xx (Client error responses) - 401 Unauthorized, 404 Not Found
 * - 5xx (Server error responses) - 502 Bad Gateway, 504 Gateway Timeout
 */

import { test,expect } from "@playwright/test";
import pageTwoAllUsers from '../test-data/reqs-userspageres.json';

test.describe.only("Api Testing", ()=>{
    
        test('Get all users', async({request})=>{

        // Make GET request
        const response = await request.get('https://reqres.in/api/users?page=2');

        // Check status
        console.log(response)
        console.log(response.status())
        console.log(await response.json())
        expect(response.status()).toBe(200);

        // Parse JSON body
        const body = await response.json();

        expect(body).toEqual(pageTwoAllUsers);

    })
})