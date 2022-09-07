# @bs-commerce/models


[![npm (scoped)](https://img.shields.io/npm/v/@bs-commerce/models.svg)](https://www.npmjs.com/package/@bs-commerce/models)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@bs-commerce/models.svg)](https://www.npmjs.com/package/@bs-commerce/models)

[![npm](https://nodei.co/npm/@bs-commerce/models.png)](https://www.npmjs.com/package/@bs-commerce/models)


This package is built for **`BS-Commerce E-Commerce Application`** to describing an object with properties, interfaces are also capable of describing function types. Typescript allows an interface to inherit from multiple interfaces. Use the extends keyword to implement inheritance among interfaces.


## Install

```
$ npm install @bs-commerce/models
```

## Usage

```ts
// => Import types from @bs-commerce/models in your desired ts file
import {CreateCustomerRequest} from '@bs-commerce/models'

// => Then use it for typescript verification
const customerDemo = <CreateCustomerRequest>{
    phone: "string",
    email: "string",
    otp: 1,
    name: "string",
    password: "string"
}

console.log(customerDemo)

```

## License

MIT License