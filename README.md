---
Repo Type: Sample
Languages:
- Node.js
- JavaScript
- SQL
- JSON
Products:
- Azure Database for PostgreSQL
- Azure Functions
Description: "Creating a bare minimum Azure Function REST API to return JSON results from Azure Database for PostgreSQL with Node.js"
---

# REST API to return JSON results from Azure Database for PostgreSQL with Azure Functions and Node.js

![License](https://img.shields.io/badge/license-MIT-green.svg)

Creating a serverless REST API with Azure Functions is just a matter of a few lines of code. Azure Functions is an outstanding modern serverless computing service that developers use to create scalable solutions without worrying about the infrastructure setup. Node.js is another most popular selections to develop scalable, refined, high-performance REST API to be used by diverse clients. Azure Functions takes care of running the Node.js code.

The code is triggered when Azure Functions receives an HTTP request. The function code handles the request, prepares a SQL query with the given parameters, executes the query against the PostgreSQL server, converts the results to JSON, and returns it to the caller.

## Motivation

This project was kick-started to create an endpoint to query and get JSON data from Azure Database for PostgreSQL for a handful of in-house applications.

## Features

* Connection Credentials fetched from environment varibles during exeution avoiding plain-text storage
* Rich documentation available for the used libraries

## API Reference

This app uses node-postgres (pg) library to connect and query the Azure Database for PostgreSQL. The official documentation can be found here: https://node-postgres.com/

## How to use?

When deployed to Azure (or running locally), an HTTP request triggers the app. The request may or may not have query variables to refine the query results. The app expects a `country` query parameter to filter the results.

## Local Setup Requirements

Following softwares and libraries should be installed on the local machine to run and test the app locally:

* [Node.js](https://nodejs.org/en/download/)
* [pg](https://www.npmjs.com/package/pg)
* [.NET Core](https://dotnet.microsoft.com/download)
* [Visual Studio Code](https://code.visualstudio.com/download)
* Azure Functions extension for Visual Studio Code
* [Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=windows%2Ccsharp%2Cbash#v2)

## Local Adjustments to Run the App

Adjust the connection details and credentials in `local.settings.json` to point and connect to a desired PostgreSQL instance.

If script execution is disabled on your machine, you might encounter the following error during execution

![script_error](/images/script_error.png)

To resolve this issue, change the script [execution policy](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.1) to "Unrestricted". Run the following command in the PowerShell as admin

```bash
Set-ExecutionPolicy Unrestricted
```

![script_policy_change](/images/script_policy_change.png)

Revert the execution policy

```bash
Set-ExecutionPolicy Restricted
```

A successful execution will reveal the local URL

![success_run](/images/success_run.png)

Refer to the Microsoft Docs for assistance: https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-node#run-the-function-locally

## Deploy to Azure

This app is a bare minimum working sample and can be deployed to Azure directly from the VS Code.

Refer to Microsoft Docs for step-by-step instructions: https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-node#sign-in-to-azure

## Further Reading

Read the relevant blog to understand how to develop this App using the Portal: https://medium.com/swlh/building-a-rest-api-for-azure-postgresql-using-azure-functions-with-node-js-e33f1d7a1f4e
