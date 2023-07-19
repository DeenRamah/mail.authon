const express = require('express');
const appRoute = require('./routers/router.js')



const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());


/** create route*/
app.use('/api', appRoute)

app.listen(PORT, () => {
    console.log('server is Starting')
})