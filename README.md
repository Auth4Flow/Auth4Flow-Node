# Warrant Node.js Library

Use [Warrant](https://warrant.dev/) in server-side Node.js projects.

## Installation

Use `npm` to install the Warrant module:

```sh
npm install @warrantdev/warrant-node
```

## Usage
Import the Warrant client and pass your API key to the constructor to get started:
```js
const Warrant = require("@warrantdev/warrant-node");

const warrantClient = new Warrant.Client("api_test_f5dsKVeYnVSLHGje44zAygqgqXiLJBICbFzCiAg1E=");
```
Or using ES modules:
```js
import { Client as Warrant } from "@warrantdev/warrant-node";

const warrant = new Warrant("api_test_f5dsKVeYnVSLHGje44zAygqgqXiLJBICbFzCiAg1E=");
```

### `createUser(userId)`
This method creates a user entity in Warrant with the specified `userId`.
```js
const Warrant = require("@warrantdev/warrant-node");

const warrantClient = new Warrant.Client("api_test_f5dsKVeYnVSLHGje44zAygqgqXiLJBICbFzCiAg1E=");

// Creates a user with user.id as the userId
warrantClient
    .createUser(user.id)
    .then((newUser) => console.log(newUser))
    .catch((error) => console.log(error));
```
Or using ES modules and async/await:
```js
import { Client as Warrant } from "@warrantdev/warrant-node";

const warrant = new Warrant("api_test_f5dsKVeYnVSLHGje44zAygqgqXiLJBICbFzCiAg1E=");

// Creates a user with user.id as the userId and
// assigns the new user the "store_owner" role
const newUser = await warrant.createUser(user.id);
```

### `createSession(userId)`
This method creates a session in Warrant for the user with the specified `userId` and returns a session token which can be used to make authorized requests to the Warrant API only for the specified user. This session token can safely be used to make requests to the Warrant API's authorization endpoint to determine user access in web and mobile client applications.

```js
const Warrant = require("@warrantdev/warrant-node");

const warrantClient = new Warrant.Client("api_test_f5dsKVeYnVSLHGje44zAygqgqXiLJBICbFzCiAg1E=");

// Creates a session token scoped to the specified userId
// Return this token to your client application to allow
// it to make requests for the given user.
warrantClient
    .createSession(user.id)
    .then((sessionToken) => console.log(sessionToken))
    .catch((error) => console.log(error));
```
Or using ES modules and async/await:
```js
const { Client as Warrant } = require("@warrantdev/warrant-node");

const warrant = new Warrant("api_test_f5dsKVeYnVSLHGje44zAygqgqXiLJBICbFzCiAg1E=");

// Creates a session token scoped to the specified userId
// Return this token to your client application to allow
// it to make requests for the given user.
const sessionToken = await warrant.createSession(user.id);
```

### `isAuthorized(objectType, objectId, relation, userId)`

This method returns a `Promise` that resolves with `true` if the user with the specified `userId` has the specified `relation` to the object of type `objectType` with id `objectId` and `false` otherwise.

```js
const Warrant = require("@warrantdev/warrant-node");

const warrantClient = new Warrant.Client("api_test_f5dsKVeYnVSLHGje44zAygqgqXiLJBICbFzCiAg1E=");

//
// Example Scenario:
// An e-commerce website where Store Owners can edit store info
//
warrantClient
    .isAuthorized("store", storeId, "edit", user.id)
    .then((isAuthorized) => {
        if (isAuthorized) {
            // Carry out logic to allow user to edit a Store
        }
    })
    .catch((error) => console.log(error));
```
Or using ES modules and async/await:
```js
import { Client as Warrant } from "@warrantdev/warrant-node";

const warrant = new Warrant("api_test_f5dsKVeYnVSLHGje44zAygqgqXiLJBICbFzCiAg1E=");

//
// Example Scenario:
// An e-commerce website where Store Owners can edit store info
//
if (await warrant.isAuthorized("store", storeId, "edit", user.id)) {
    // Carry out logic to allow user to edit a Store
}
```

We’ve used a random API key in these code examples. Replace it with your
[actual publishable API keys](https://app.warrant.dev) to
test this code through your own Warrant account.

For more information on how to use the Warrant API, please refer to the
[Warrant API reference](https://docs.warrant.dev).

Note that we may release new [minor and patch](https://semver.org/) versions of
`@warrantdev/warrant-node` with small but backwards-incompatible fixes to the type
declarations. These changes will not affect Warrant itself.

## TypeScript support

This package includes TypeScript declarations for Warrant.

## Warrant Documentation

- [Warrant Docs](https://docs.warrant.dev/)
