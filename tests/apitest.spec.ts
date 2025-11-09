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
import { request } from "https";

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

    test('Get single user', async({request})=>{

        // Make GET request
        const response = await request.get('https://reqres.in/api/users/2');
        const body = await response.json();
        // Check status
        // console.log(response)
        // console.log(response.status())
        // console.log(await response.json())
        // expect(response.status()).toBe(200);
        
        console.log(body);

        // Parse JSON body
        
        expect(body.data.id).toBe(2);
        expect(body.data.email).toBe("janet.weaver@reqres.in");
        expect(body.data.first_name).toBe("Janet");
        expect(body.data.last_name).toBe("Weaver");
        expect(body.data.avatar).toBe("https://reqres.in/img/faces/2-image.jpg");

        // expect(body).toEqual(pageTwoAllUsers.data[1]);
    });

    test("Post - create new user", async({request})=>{

        const newUser = {
            name: "newstar",
            job: "leader"
        };
        const response = await request.post('https://reqres.in/api/users', {
            data: newUser,
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        });

        expect(response.status()).toBe(201);
        const body = await response.json();
        console.log(body);
        expect(body.name).toBe(newUser.name);
        expect(body.job).toBe("qa engineer");

    })


      test('Update a User', async ({ request }) => {

        const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            name: 'Neo',
            job: 'the One'
        },
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
        });

        const body = await response.json();
        expect(response.status()).toBe(200);
        expect(body.name).toBe('Neo');
        expect(body.job).toBe('the One');

           
    });


    test('Delete a User', async({request})=>{

            const response = await request.put('https://reqres.in/api/users/2',
                {
                    headers: {
                            'x-api-key': 'reqres-free-v1'
                             }       

    })

    console.log(response.status());
    expect(response.status()).toBe(204)

    })

})