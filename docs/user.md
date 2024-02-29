# User API Spec

## Register User API

Endpoint : POST /api/users

### Request Body :

```json
{
  "email": "221910843@stis.ac.id",
  "nama": "Emanuel Lega",
  "no_telp": "085123456789",
  "password": "passwordrahasia"
}
```

### Resposnse Body Success :

```json
{
  "data": {
    "id": 1,
    "role": 0,
    "email": "221910843@stis.ac.id",
    "nama": "Emanuel Lega",
    "no_hp": "085123456789"
  }
}
```

### Resposnse Body Error :

```json
{
  "errors": "Email already registered"
}
```

## Login User API

Endpoint : POST /api/users/login

### Request Body :

```json
{
  "email": "221910843@stis.ac.id",
  "password": "passwordrahasia"
}
```

### Response Body Success

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

### Response Body Error :

```json
{
  "errors": "Email or password wrong"
}
```

## Update User API

Endpoint : POST /api/users/current

Headers :

- Authorization: Bearer <access_token>
- Content-Type: application/json

### Request Body

```json
{
  "role": 1, //optional
  "nama": "Imanuel Lega", //optional
  "no_hp": "085123456789", //optional
  "password": "passwordrahasia" //optional
}
```

### Response Body Success

```json
{
  "data": {
    "id": 1,
    "role": 1,
    "email": "221910843@stis.ac.id",
    "nama": "Imanuel Lega",
    "no_hp": "085123456789"
  }
}
```

### Response Body Error

```json
{
  "error": "User not found"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :

- Authorization: Bearer <access_token>
- Content-Type: application/json

### Response Body Success

```json
{
  "data": {
    "id": 1,
    "role": 1,
    "email": "221910843@stis.ac.id",
    "nama": "Emanuel Lega",
    "no_hp": "085123456789"
  }
}
```

### Response Body Error

```json
{
  "error": "Unauthorized access, please provide a valid access token"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers :

- Authorization: Bearer <access_token>
- Content-Type: application/json

### Response Body Success

```json
{
  "data": "OK"
}
```

### Response Body Error

```json
{
  "error": "Unauthorized"
}
```
