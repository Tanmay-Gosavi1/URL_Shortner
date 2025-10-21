const shortid = require('shortid')
const Url = require('../models/Url.js')
const dotenv = require('dotenv')
dotenv.config()

const Shortner = async (req,res) => {
    try {
        const {longUrl} = req.body 

        if(!(longUrl.trim())){
            return res.status(400).json({success: false , message : "Please paste the url"})
        }

        const shortCode = shortid()

        const shortUrl = `${process.env.API_URL}/${shortCode}`

        const url = await Url.create({
            longUrl : longUrl ,
            shortCode : shortCode 
        }) 

        return res.status(200).json({success : true , message : "Url submitted successfully" , shortUrl})

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success : false,
            message : "Issue while shortning URL"
        })
    }
}

const getUrl  = async (req,res)=>{
    try {
        const {shortCode} = req.params 

        const originalUrl = await Url.findOne({shortCode:shortCode})

        if(!originalUrl){
            return res.status(400).json({success : false , message : "Invalid shortCode"})
        }

        const longUrl = originalUrl.longUrl 

        res.redirect(longUrl)

    } catch (error) {
        console.log(error)
        return res.status(500).json({success : false , message : ""})
    }
}
module.exports = {Shortner , getUrl}