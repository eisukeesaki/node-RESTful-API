### tasks
```
create endpoints
    PUT /api/users
    DELETE /api/users
setup validation and constrainst in moidel

OK: implement users.routes.js/getAll()
```

### maps
```

debugging
    write JavaScript objects to file
        fs
            writeFileSync
        json-stringify-safe
            stringify objects with circular references
    diff large output
        vim
            :vert diffs[split] <file to compare against>

sequelize.define()
    attatches user model to sequelize.models

middleware
    session management
    authentication
    parsing of cookies
    parsing and reading of PUT/POST bodies
    serve sttic files
    
route handler
    serve specific web page
    respond to API requests
    
validation
    client side
        form validation
    server side
        request body validation
            sequelize level
            ? route level 
    
?data integrity
    table constraints
        SQL level

```

### similar projects
- [ft_RESTfulAPI](https://github.com/eisukeesaki/ft_RESTfulAPI)

