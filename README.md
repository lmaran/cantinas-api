[ ![Codeship Status for lmaran/cantinas-api](https://app.codeship.com/projects/c72cfc90-c6e1-0135-62b8-760ece7b3e2c/status?branch=master)](https://app.codeship.com/projects/261258)

## Development

```bash
# start server (Node.js, http://localhost:1416):
npm start

# test with wallaby.js
http://localhost:51245 or http://wallabyjs.com/app

# test with moch
npm test
```

## Production

```bash
npm build-prod

# from dev (http://localhost:1416):
NODE_ENV=staging PORT=1416 node dist/server/app.js

# from stg/prod:
NODE_ENV=staging PORT=1416 node server/app.js
```