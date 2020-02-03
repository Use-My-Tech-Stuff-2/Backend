# Backend - Use my Tech

Documentation
`https://usetechstuff.herokuapp.com/`

## Register


Post 
### https://usetechstuff.herokuapp.com/api/register

Expects an object with this format as the request body:

```
{
  "username": "user1",   //string (required)
  "password": "password", //string (required)
  "department": "owner or renter" //string (required)
}
```

## Login


Post 
### https://usetechstuff.herokuapp.com/api/Login

Expects an object with this correct creditials stored in the APi:

```
{
  "username": "db",   //string (required)
  "password": "123", //string (required)

}
```