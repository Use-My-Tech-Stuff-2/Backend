# Backend - Use my Tech

Documentation
### https://usetechstuff.herokuapp.com/

Section Contents:

- [/api/register POST](#apiregister-post)
- [/api/login POST](#apilogin-post)
- [/api/items GET](#apiitems-get)
- [/api/item/:id GET](#apiitemid-get)



## Dummy data

### Users
```
[
  {id: 1, username: 'Jay', password:'123', department:'owner'},
  {id: 2, username: 'db', password:'123', department:'owner'}

]

```

### Items

```
[
      { id: 1, 
        item_name:'Roomba', 
        description:'Does the cleaning for you',
        user_id: 2,
        availability: true,
        daily_rate: 20,
        condition: "Great",
        location: 'LA'
      },
      { id: 2, 
        item_name:'XXL Megaphone', 
        description:'Obnoxiously loud ',
        user_id: 1,
        availability: true,
        daily_rate: 15,
        condition: "It works",
        location: 'LA'
      }
]
```

## Register



### /api/register POST

Expects an object with this format as the request body:

```
{
  "username": "user1",   //string (required)
  "password": "password", //string (required)
  "department": "owner or renter" //string (required)
}
```

## Login


 
### /api/login POST

Expects an object with this correct credentials stored in the APi:

```
{
  "username": "db",   //string (required)
  "password": "123", //string (required)

}
```

## All Items

### Authorization needed, 'token'



### /api/items GET

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



### /api/item/:id GET
 
 Note-':id' will be replaced by items id number

Will return a single item based off of provided id 