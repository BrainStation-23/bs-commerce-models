import {CreateCustomerRequest, CreateManufacturerRequest, CreateTagRequestBody} from '@bs-commerce/models'

const customerDemo = <CreateCustomerRequest>{
    phone: "string",
    email: "string",
    otp: 1,
    name: "string",
    password: "string",

}

const manufacturerDemo = <CreateManufacturerRequest>{
    name: "string",
    description: "string",
    picture: "string",

}

console.log(customerDemo, manufacturerDemo)