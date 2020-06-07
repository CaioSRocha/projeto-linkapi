const mongoose = require('mongoose');
const Dealdb = mongoose.model('Deal');
const Deals = require('../helpers/Deals');
const Pipedriver = require('../helpers/pipedrive');
const bling = require('../helpers/bling');

const dealsObj = new Deals();
 
module.exports = {
    async create(req, res){
        try {
            const filter = await Pipedriver.filterCreate();
            
            if(!filter[0]){
                return res.status(200).json({Status: 'No orders registered' }); 
            }
            
            for (const item of filter){
                await dealsObj.create({
                    title: item.title,
                    value: item.value,
                    status: item.status,
                    won_time: item.won_time,
                    integration: 'not integrated'
                    }); 
            }    
            return res.status(201).json({Status: 'Created' });            
        } catch (e) {
            return res.status(500).json({Error: e });
        }
    },

    async dealsBling(req, res){
        try {
            const data = await Dealdb.find({integration: 'not integrated'});
            if(!data[0]){
                return res.status(200).json('There are no integration requests');  
            }
            const dataBling = await bling.sendBling(data);
            return res.status(201).json(dataBling);
        }catch (e) {
            return res.status(500).json(e);
        }
    },

    async getDeals(req, res){
        try {
           const data = await Dealdb.find();
            return res.status(200).json(data);
        } catch (e) {
            return res.status(500).json(e);
        }
    }
    
};
