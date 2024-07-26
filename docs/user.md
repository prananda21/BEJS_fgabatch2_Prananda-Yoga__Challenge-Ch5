# User API Specification

> **Notes:**\
> Request with <?> mean nullable

## Register User

> Method / Endpoint : **POST /api/v1/users/register**

### Request Body

```json
{
    "email": "string",
    "password": "text",
    "pin": "text"
}
```

### Response Body

#### 201: Created

```json
{
    "status": true,
    "message": "Created",
    "data": {
        "id": "uuid",
        "email": "string",
        "is_verified": "boolean"
    }
}
```

#### 400: Bad Request

```json
{
    "status": false,
    "message": "error.message",
    "data": null
}
```

## Register User Credential

> Method / Endpoint : **POST /api/v1/users/register/credential**

### Request Body

```json
{
    "first_name": "string",
    "last_name": "string",
    "phone_number": "string",
    "birth_place": "string",
    "birth_date": "dateTime",
    "national_id": "text",
    "is_employeed?": "boolean",
    "job?": "string",
    "mother_name": "string"
}
```

### Response Body

#### 201: Created

```json
{
    "status": true,
    "message": "Created",
    "data": {
        "id": "uuid",
        "first_name": "string",
        "last_name": "string",
        "phone_number": "string",
        "birth_place": "string",
        "birth_date": "string",
        "is_employeed": "boolean",
        "job": "string",
        "mother_name": "string"
    }
}
```

#### 400: Bad Request

```json
{
    "status": false,
    "message": "error.message",
    "data": null
}
```

$~$

## Register User Address

> Method / Endpoint : **POST /api/v1/users/register/address**

### Request Body

```json
{
    "street": "string",
    "district": "string",
    "regency": "string",
    "province": "string",
    "country": "string",
    "postal_code": "string"
}
```

### Response Body

#### 201: Created

```json
{
    "status": "success",
    "message": "Created",
    "data": {
        "id": "uuid",
        "street": "string",
        "district": "string",
        "regency": "string",
        "province": "string",
        "country": "string",
        "postal_code": "string"
    }
}
```

#### 400: Bad Request

```json
{
    "status": "error",
    "message": "error.message",
    "data": null
}
```

$~$

## Login User

> Method / Endpoint : **POST /api/v1/users/login**

### Request Body

```json
{
    "email": "string",
    "password": "string"
}
```

### Response Body

#### 200: OK

```json
{
    "status": "success",
    "message": "OK",
    "data": {
        "email": "string",
        "first_name": "string",
        "last_name": "string",
        "token": "jwt-token"
    }
}
```

#### 400: Bad Request

```json
{
    "status": "error",
    "message": "error.message",
    "data": null
}
```

## Logout User

> Method / Endpoint : **POST /api/v1/users/logout**

### Request Header

```
  JWT-TOKEN: "string"
```

### Response Body

#### 200: OK

```json
{
    "status": "success",
    "message": "OK",
    "data": null
}
```

#### 401: Unauthorized

```json
{
    "status": "error",
    "message": "error.message",
    "data": null
}
```

$~$

## Get Current User

> Method / Endpoint : **GET /api/v1/users/current**

### Request Header

```
  JWT-TOKEN: "string"
```

### Response Body

#### 200: OK

```json
{
    "status": "success",
    "message": "OK",
    "data": {
        "id": "uuid",
        "first_name": "string",
        "last_name": "string",
        "email": "string",
        "phone_number": "string",
        "birth_place": "string",
        "birth_date": "string",
        "national_id": "string",
        "is_employeed": "boolean",
        "job": "string",
        "mother_name": "string",
        "is_verified": "boolean",
        "address": [
            {
                "id": "uuid",
                "street": "string",
                "district": "string",
                "regency": "string",
                "province": "string",
                "country": "string",
                "postal_code": "string",
                "type": {
                    "id": "string",
                    "description": "string"
                }
            }
        ],
        "account": [
            {
                "id": "uuid",
                "number": "string",
                "balance": "integer",
                "interest_rate": "integer",
                "type": {
                    "id": "string",
                    "description": "string"
                },
                "transaction": [
                    {
                        "id": "uuid",
                        "amount": "integer",
                        "description": "description",
                        "type": {
                            "id": "string",
                            "description": "string"
                        }
                    }
                ]
            }
        ]
    }
}
```

#### 400: Bad Request, 401: Unauthorized, 404: Not Found

```json
{
    "status": "error",
    "message": "error.message",
    "data": null
}
```

$~$

## Update Current User Data

> Method / Endpoint: **PATCH /api/v1/users/current**

### Request Header

```
  JWT-TOKEN: "string"
```

### Request Body

```json
{
    "email?": "string",
    "password?": "string",
    "pin?": "string"
}
```

### Response Body

#### 200: OK

```json
{
    "status": "success",
    "message": "OK",
    "data": {
        "email": "string"
    }
}
```

#### 400: Bad Request, 401: Unauthorized, 404: Not Found

```json
{
    "status": "error",
    "message": "error.message",
    "data": null
}
```

## Update Current User Address Data

> Method / Endpoint: **PATCH /api/v1/users/current/address**

### Request Header

```
  JWT-TOKEN: "string"
```

### Request Body

```json
{
    "street?": "string",
    "district?": "string",
    "regency?": "string",
    "province?": "string",
    "country?": "string",
    "postal_code?": "string",
    "type?": "string"
}
```

### Response Body

#### 200: OK

```json
{
    "status": "success",
    "message": "OK",
    "data": {
        "street": "string",
        "district": "string",
        "regency": "string",
        "province": "string",
        "country": "string",
        "postal_code": "string",
        "type": "string"
    }
}
```

#### 400: Bad Request, 401: Unauthorized, 404: Not Found

```json
{
    "status": "error",
    "message": "error.message",
    "data": null
}
```
