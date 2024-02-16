
# Mongo DB Aggregation pipeline

Gives total number of users, the average age  and the number of users in each country.

The collection has following fields

| Field | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` |  Name of user |
| `email`      | `string` |  Email of user |
| `age`      | `number` |  Age of user |
| `country`      | `string` |  Country of user |
| `password`      | `string` |  Password of user |




## 

#### Gets total number of users, the average age  and the number of users in each country.


```http
  GET /user-stats
```

Sample response

```javascript
[
    {
        "totalUsersByCountry": 1,
        "totalUsers": 11,
        "averageAge": 31.272727272727273,
        "country": "Canada"
    },
    {
        "totalUsersByCountry": 1,
        "totalUsers": 11,
        "averageAge": 31.272727272727273,
        "country": "India"
    },
    {
        "totalUsersByCountry": 1,
        "totalUsers": 11,
        "averageAge": 31.272727272727273,
        "country": "Mexico"
    },
    {
        "totalUsersByCountry": 1,
        "totalUsers": 11,
        "averageAge": 31.272727272727273,
        "country": "USA"
    },
    {
        "totalUsersByCountry": 1,
        "totalUsers": 11,
        "averageAge": 31.272727272727273,
        "country": "Poland"
    },
    {
        "totalUsersByCountry": 1,
        "totalUsers": 11,
        "averageAge": 31.272727272727273,
        "country": "Australia"
    },
    {
        "totalUsersByCountry": 1,
        "totalUsers": 11,
        "averageAge": 31.272727272727273,
        "country": "Russia"
    },
    {
        "totalUsersByCountry": 1,
        "totalUsers": 11,
        "averageAge": 31.272727272727273,
        "country": "Japan"
    },
    {
        "totalUsersByCountry": 1,
        "totalUsers": 11,
        "averageAge": 31.272727272727273,
        "country": "France"
    },
    {
        "totalUsersByCountry": 1,
        "totalUsers": 11,
        "averageAge": 31.272727272727273,
        "country": "Spain"
    },
    {
        "totalUsersByCountry": 1,
        "totalUsers": 11,
        "averageAge": 31.272727272727273,
        "country": "Egypt"
    }
]
```


## Live Link (Home URL)

```
https://aggregation-rooba-finance-mohit2103.onrender.com/
```
## Authors

- [@codemohitpra03](https://www.github.com/codemohitpra03)
