# Lindol-PH
A node JS based application that fetch data from USGS Earthquake API and post it to Lindol PH Facebook Page (https://www.facebook.com/lindolph.dev/) using Facebook API.


## Run Locally

Clone the project

```bash
  git clone https://github.com/jnicnvr/Lindol-PH.git
```

Go to the project directory

```bash
  cd Lindol-PH
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```bash
COM_LINDOL_PH_FACEBOOK_TOKEN=""
COM_LINDOL_PH_FACEBOOK_PAGE_ID=""
COM_LINDOL_PH_PAGE_POSTING_ENABLED="off"
COM_LINDOL_PH_NODE_CRON_JOB_ENABLED="enabled"
COM_LINDOL_PH_NODE_CRON_JOB_SCHEEDULE="* * 8 * *"
COM_LINDOL_PH_PORT=8001
COM_LINDOL_PH_COUNTRY="Philippines"
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
