### Bank Account Management

### Introduction

This API is a simple Fintech Project that allows user to register or login to the system and create an account then fund their account, and then withdraw funds from the account and transfer funds to other accounts.

[Postman-Documentation](https://documenter.getpostman.com/view/15379432/2s9Y5crzhB)

[URL](https://bank-mgt.onrender.com)

### Technology Used

- [Node.js](https://nodejs.org/) - Server Side
- [Express.js](https://expressjs.com/) for routing
- [MongoDB](https://www.cloud.mongodb.com/) for database
- [Render](https://dashboard.render.com/) for deployment and hosting

### How to run locally

```bash
npm install
npm run dev
```

### Endpoint to create bank account

#### create a bank account

```bash
curl -X POST -H "Content-Type: application/json" -d '{
    "accountname": "
    "deposit": "
    "accounttype": "
    "dob": "
    }' \
    https://bank-mgt.onrender.com
   
```

| Parameter  | Type     | Description                        |
| :--------- | :------- | :--------------------------------- |
| `accountname`     | `string` | **Required**. accountname is required     |
| `deposit`    | `string` | **Required**. deposit is required    |
| `accounttype` | `string` | **Required**. accounttype is required |
| `dob`    | `string` | **Required**. dob is required    |

#### Fetch individual account information

```bash
curl -X GET -H "Content-Type: application/json" -d '{
  "accountnumber": accountnumber"
  }' \
    https://bank-mgt.onrender.com
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `accountnumber`    | `string` | **Required**. accountnumber is required    |

####  Fetch All account information

```bash
curl -X GET -H "Content-Type: application/json" -d \
    https://bank-mgt.onrender.com
```

Copyright (c) 2023 Victoria
