
## API Original

> Esta API é realmente original :D

### Reconhecer imagem

**POST `https://fdirect.herokuapp.com/detect-image`**

_body_ - `form-data`
```
file => file path
```

### Realizar pagamentos

**POST `https://fdirect.herokuapp.com/payments`**

_body_ - `application/json`
```json
{
  "amount": "1.00",
  "comments": "Parada aí",
  "callbackUrl": "http://localhost",
  "favoredId": "1"
}
```

