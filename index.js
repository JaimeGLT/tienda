const app = require('./src/app');
const { PORT } = require('./secure/secure');
const { database } = require('./db');

database.sync({ force: false }).then(
    console.log('Database connected'),

    app.listen(PORT, () => {
        console.log('Server on port:', PORT);
    })
)