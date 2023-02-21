const axios = require('axios')
exports.pagePost = async(message) => {
    console.log(`Facebook Post to Page Enabled: ${process.env.COM_LINDOL_PH_PAGE_POSTING_ENABLED}`)
   if(process.env.COM_LINDOL_PH_PAGE_POSTING_ENABLED === "enabled"){
        const token = process.env.COM_LINDOL_PH_FACEBOOK_TOKEN
        const pageID = process.env.COM_LINDOL_PH_FACEBOOK_PAGE_ID
        try{
            const res = await axios.post(`https://graph.facebook.com/${pageID}/feed?message=${message}&access_token=${token}`)
            console.log('res',res)
        }catch(err){
            console.log('Err in posting',err)
        }
   }

    
}