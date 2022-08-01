
const express = require('express');
const { redirect } = require('express/lib/response');
const router = express.Router();
var db = require('../connection');
var ObjectID = require('mongodb').ObjectID
const weatherController = require('../controller/weatherController');


function weatherUpdate(cityname, objectId) {

    weatherController.getWeather(cityname).then((response) => {
       
        let weather = response

        var today = new Date().toISOString().slice(0, 10);
        
        weather['updated-on'] = today
        db.get().collection('weather').updateOne({ _id: objectId }, {
            $set: weather
        }).then((data, error) => {
            if (data) {
                if (data.modifiedCount == 0) {
                    console.log(data)
                } else {

                    return
                }
            } else {
                console.log(error)
            }

        })
    })

}








router.get('/weather', (req, res) => {
    var today = new Date().toISOString().slice(0, 10);

    db.get().collection('weather').find({ 'updated-on': today }).limit(20).toArray((error, data) => {
    
        if (data) {
            return res.status(200).json(data)
        } else {
            return res.status(500).json(error)
        }
    })
})

router.get('/getExtreme', (req, res) => {
    var today = new Date().toISOString().slice(0, 10);

    db.get().collection('weather').find({$and: [{ 'updated-on': today},{deviation : {$exists: true} }]}).toArray((error, data) => {
        console.log(data)
        if (data) {
            return res.status(200).json(data)
        } else {
            return res.status(500).json(error)
        }
    })
})
router.post('/add', async (req, res) => {
    let data = req.body
    let weather = await db.get().collection('weather').findOne({ cityname: data.cityname })
    if (weather) {
        
        var today = new Date().toISOString().slice(0, 10);

        if (weather['updated-on'] == today) {
            return res.status(200).json({ data: weather })
        } else {


            let dataId = weather._id
            let objectId = new ObjectID(dataId)
            weatherUpdate(data.cityname, objectId)
            let newWeather = await db.get().collection('weather').findOne({ _id: objectId })
            return res.status(200).json({ data: newWeather })

        }

    } else {
        weatherController.getWeather(data.cityname).then((response) => {
            
            let weather = response

            var today = new Date().toISOString().slice(0, 10);
            weather['updated-on'] = today

            db.get().collection('weather').insertOne(weather).then((data, err) => {
            
                data = data.ops[0]
                if (data) {

                    return res.status(200).json({ data })
                } else {
                    return res.status(500).json(err)
                }

            })


        }).catch(error => {

            return res.status(404).json(error)
        })

    }



})
router.patch('/update', async (req, res) => {
    let data = req.body
    console.log(data)
    let dataId = data._id
    let objectId = new ObjectID(dataId)
    let oldWeather = await db.get().collection('weather').findOne({ _id: objectId })
    let cityname = oldWeather.cityname

    weatherUpdate(cityname, objectId)
    let newWeather = await db.get().collection('weather').findOne({ cityname: data.cityname })
    return res.status(200).json({ data: newWeather })
})

router.delete('/delete/:id',(req,res)=>{
    let proId=req.params.id
    let objectIdpro=new ObjectID(proId)

    db.get().collection('weather').removeOne({_id:objectIdpro}).then((data,error)=>{
        if(data){
            if(data.nRemoved == 0){
               return res.status(404).json({message:"Id not found"})
            }else{
               return res.status(200).json({message:" Deleted successfully"})
            }
        }else{
           return res.status(500).json(err)
        }
    })
})



module.exports = router;
