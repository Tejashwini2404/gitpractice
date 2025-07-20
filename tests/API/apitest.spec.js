const { test, expect } = require('@playwright/test');

//import addempdata from "../../testData/addemployeepayload.json"
test('Reqres post API', async ({ request }) => {

    const AddUser = await request.post("https://reqres.in/api/users", {
        headers: {
            "x-api-key": "reqres-free-v1",
        },
        data: {
            "name": "Raju",
            "job": "Trainer"
        }
    })

    console.log(await AddUser.json())
})

