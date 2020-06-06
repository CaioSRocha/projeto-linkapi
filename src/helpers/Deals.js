const mongoose = require('mongoose');
const Dealdb = mongoose.model('Deal');

class Deals{
    constructor(title, value, status, won_time){
        this.title = title,
        this.value = value,
        this.status = status
        this.won_time = won_time
    }

    async create(data){
        const deal = await Dealdb.find({title: data.title})
        if(deal[0]){
            return deal
        }
        const dealCreate =  await Dealdb.create(data)    
        return dealCreate
    }


};

module.exports = Deals;