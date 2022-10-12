let db = require("../db/config");

module.exports = {
    //[GET] /post/location
    getLocation(req, res, next) {
        let queryStatement = "SELECT * FROM blogreview.location";
        db.query(queryStatement, function (err, locations) {
            if (err) throw err;
            let result = [];
            locations.forEach(function (location) {
                let locationObj = {
                    ID: location.id,
                    name: location.name,
                    kind_of_service: location.kind_of_service,
                    address: {
                        specific_location: location.specific_location,
                        province: location.province,
                        district: location.district,
                        ward: location.ward
                    },
                    content: {
                        picture: location.picture,
                        text: location.text,
                        video: location.video
                    },
                    time:{
                        time_open: location.time_open,
                        time_close: location.time_close
                    },
                    price_range:{
                        max_price: location.max_price,
                        min_price: location.min_price
                    },
                    service_list:[]
                    
                };
                result.push(locationObj);
            })
            return res.status.json(result);
        })
    }

}