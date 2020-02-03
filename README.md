# Backend - Use my Tech

Documentation
### https://usetechstuff.herokuapp.com/

## Register


# Post 
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


# Post 
### https://usetechstuff.herokuapp.com/api/login

Expects an object with this correct credentials stored in the APi:

```
{
  "username": "db",   //string (required)
  "password": "123", //string (required)

}
```

## All Items

### Authorization needed, 'token'


# Get
## https://usetechstuff.herokuapp.com/api/items

Will return all items in the database and their information, looking something like this...

```
[
    {
        "id": 1,
        "item_name": "Roomba",
        "description": "Does the cleaning for you",
        "user_id": 2,
        "availability": 1,
        "daily_rate": 20,
        "condition": "Great",
        "location": "LA"
    }
]


```



## Single Item

### Authorization needed, 'token'


# Get
## https://usetechstuff.herokuapp.com/api/item/:id
 
 Note-':id' will be replaced by items id number

Will return a single item based off of provided id 