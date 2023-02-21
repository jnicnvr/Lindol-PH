require('dotenv').config()
const express = require('express')
const app = express()
const lindol = require('./integration/earthquake_api')
const moment = require('moment')
const cron = require('node-cron');


if(process.env.COM_LINDOL_PH_NODE_CRON_JOB_ENABLED === "enabled"){
    console.log(`Node Cron Job Enabled: ${process.env.COM_LINDOL_PH_NODE_CRON_JOB_ENABLED}`)
    console.log(`Node Cron Job Schedule: ${process.env.COM_LINDOL_PH_NODE_CRON_JOB_SCHEEDULE}`)

    cron.schedule(process.env.COM_LINDOL_PH_NODE_CRON_JOB_SCHEEDULE, () => {
        lindol.currentEarthquakeEvent(moment)
      });
}

app.listen(process.env.COM_LINDOL_PH_PORT, ()=>{
    console.log(`Starting at port ${process.env.COM_LINDOL_PH_PORT}`)
    lindol.currentEarthquakeEvent(moment)
})
