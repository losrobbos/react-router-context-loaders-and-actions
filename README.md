# React Router 6.4+ demo

React router 6.4 introduced some new features like:
- new routing setup with RouterProvider and routes as a JS Object 
- loaders for loading data from a central store or an API
- actions for receiving form data. and processing it in central store or API
- outsourcing of error handling

The demo shows all above concepts using 
- Context Api (=> branch "main")
- JSON server to simulate requests against API (branch "api-loading-async")

## How to run

First things first 

`npm install``

On main branch:

`npm run dev`

On api-loading-async branch

```
npm run api // to start json server / API
npm run dev // to start frontend / open separate tab
```

