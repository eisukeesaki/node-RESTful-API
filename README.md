### work log
```

define model
    sequelize/models/user.model.js

initialize all models
    sequelize/index.js

create routes
    express/routes/user.routs.js
    map URIs to route controllers
        express/app.js
        
create Node server
    check db connection
    index.js

quick test routes

read db credentials from .env
    sequelize/index.js

```

### tasks
```
implement users.routes.js/getAll()
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
    

```

### similar projects
- [ft_RESTfulAPI](https://github.com/eisukeesaki/ft_RESTfulAPI)

