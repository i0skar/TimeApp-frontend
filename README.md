# Time App

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.

- [JSON-Server](https://www.npmjs.com/package/json-server) was used to create fake server.

- [JSON Server Auth](https://www.npmjs.com/package/json-server-auth) was used to mock authentication.

## Development server

Run **Angular app**:

    ng serve

Run **json-server**:

    json-server --watch db.json -m ./node_modules/json-server-auth

## Credentials

| Login                      | Password | Status   |
| -------------------------- | -------- | -------- |
| oskar.brudnowski@gmail.com | 1234     | Employee |
| oskar.brudnowski@gmail.com | 1234     | Leader   |
| oskar.brudnowski@gmail.com | 1234     | Admin    |

## To do 📜

- [ ] Update week in raport-details view
- [ ] Fix sidebar navigation for raports
- [ ] Gray out active link in sidebar
- [ ] Add authentication guards for different user roles

## Preview

![TimeApp Preview](https://i.imgur.com/nCnehdT.png)
