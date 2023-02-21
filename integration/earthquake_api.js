const axios = require('axios')
// const lindol_data = require('../lindolPH/sample_data.json') //test data
const fb_api = require('../integration/facebook_api')

exports.currentEarthquakeEvent = async(moment) =>{
    var currentDate = moment().format("YYYY-MM-DD");
    // let url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${currentDate}&endtime=${currentDate}&minmagnitude=2`
    let url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023-02-15&endtime=2023-02-16&minmagnitude=5`

    console.log('url',url)
    const res = await axios.get(url)
    if(res.data){
        console.log('konics length',res.data.features.length)
        const featureLength = res.data.features.length;
        if(featureLength != 0){
            for (i = 0; i<=featureLength-1;i++){
                // console.log('count',i)
                regionValidation(res.data.features[i].properties.place, res.data.features[i].properties.title)                    
            }
        }
    }
  
}

regionValidation =  (place,title)=>{
    if(place && title){
        const region = place.split(" ")
        region.map((p)=>{
            p == process.env.COM_LINDOL_PH_COUNTRY ? fb_api.pagePost(title) : ''
        })
    }

}

