// Azure Function: Node.js code to read PostgreSQL data with query parameter and return results as JSON
// Author: Dhyanendra Singh Rathore

// Import the pg (node-postgres) library
const pg = require('pg');

// Entry point of the function
module.exports = async function (context, req) {

    // Define variables to store connection details and credentials
    // Connection details and credentials are fetched from Environment Variables during function execution
    // Modify the connection details and credentials in local.settings.json when running the App locally
    // Add the connection details and credentials in the "Functions App -> Configuration -> Application settings" when running the App on Azure
    const config = {
        host: process.env["POSTGRES_SERVER_FQDN"],
        user: process.env["POSTGRES_USER"],
        password: process.env["POSTGRES_USER_PASSWORD"],
        database: process.env["POSTGRES_DATABASE"],
        port: 5432,
        ssl: true
    };

    // req.query.country will be passed as query variable in the URL
    const values = [req.query.country];

    // Create query to execute against the database
    const text = 'SELECT * FROM public.subcountry subcon' + (values[0] != undefined ? ' WHERE subcon."country" IN ($1)' : '');

    const querySpec = {
        text: text,
        values: (values[0] != undefined ? values : '')
    }

    try {
        // Create a pool of connections
        const pool = new pg.Pool(config);

        // Get a new client connection from the pool
        const client = await pool.connect();

        // Execute the query against the client
        const result = await client.query(querySpec);

        // Release the connection
        client.release();

        // Return the query resuls back to the caller as JSON
        context.res = {
            status: 200,
            isRaw: true,
            body: result.rows,
            headers: {
                'Content-Type': 'application/json'
            }
        };
    } catch (err) {
        context.log(err.message);
    }
}