import {CreateCustomerRequest, CreateManufacturerRequest, Manufacturer} from '@bs-commerce/models'

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

const manufacturerResponse = <Manufacturer>{
    id: "string",
}

console.log(customerDemo, manufacturerDemo)