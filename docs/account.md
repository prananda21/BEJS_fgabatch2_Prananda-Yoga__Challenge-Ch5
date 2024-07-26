# Account API Specification
> **Notes:**\
> Request with <?> mean nullable

## Create Account
> Method / Endpoint : __POST /api/v1/users/accounts__

### Request Header
```
  JWT-TOKEN: "string"
```

### Request Body
```json
{
  "balance": "integer",
  "interest_rate": "integer",
  "type": "string"
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
    "number": "integer",
    "balance": "integer",
    "interest_rate": "integer",
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
$~$

## Get Current Account
> Method / Endpoint : __GET /api/v1/users/accounts/current__

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
    "number": "integer",
    "balance": "integer",
    "interest_rate": "integer",
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

$~$

## Get All Account
> Method / Endpoint : __GET /api/v1/users/accounts__

### Request Header
```
  JWT-TOKEN: "string"
```

### Request Query Parameters
```
  number: string (optional)
  type: string (optional)
  page: integer (default 1)
  size: integer (default 10)
```

### Response Body
#### 200: OK
```json
{
  "status": "success",
  "message": "OK",
  "data": [
    {
      "id": "uuid",
      "number": "integer",
      "balance": "integer",
      "interest_rate": "integer",
      "type": "string"
    }
  ],
  "paging": {
    "current_page": 1,
    "total_pages": 10,
    "size": 10
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

## Delete Current Account
> Method / Endpoint : __DELETE /api/v1/users/accounts/current__

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

#### 400: Bad Request, 401: Unauthorized, 404: Not Found
```json
{
  "status": "error",
  "message": "error.message",
  "data": null
}
```