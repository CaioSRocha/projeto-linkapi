const mongoose = require('mongoose');
const Dealdb = mongoose.model('Deal');
const Deals = require('../helpers/Deals')
const Pipedriver = require('../helpers/pipedrive');
const bling = require('../helpers/bling');

const dealsObj = new Deals();
 
module.exports = {
    async create(req, res){
        try {

            const data = await Pipedriver.clientsWons();
            const response = data.data;      
            
            for (const item of response) {          
       
                await dealsObj.create( {
                    title: item.title,
                    value: item.value,
                    status: item.status,
                    won_time: item.won_time 
                    }) 
            }    
            return res.status(200).json({Status: 'Created' })            
        } catch (e) {
            return res.status(500).json({Error: e });
        }
    },

    async dealsBling(req, res){
        try {
            const data = await Dealdb.find();
            const dataBling = await bling.sendBling(data);
            return res.status(201).json(dataBling);
        }catch (e) {
            console.log(e)
            return res.status(500).json(e);
        }
    },

    async getDeals(req, res){
        try {
           const data = await Dealdb.find()
            return res.status(200).json(data);
        } catch (e) {
            return res.status(500).json(e);
        }
    },
};
