let db = require("../db/config");

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {

    //[GET] /post/location
    getLocation(req, res, next) {
        let limit = 20;
        let thumbnails = ["https://images.foody.vn/res/g100005/1000045833/s120x120/1eca158d-609c-481f-9bcb-f458dc1d-624caf71-220721010104.jpeg",
            "https://images.foody.vn/res/g100005/1000045833/s120x120/7acd6c7b-bdd7-4161-aa0d-27dc7d15-5217b97e-220217224719.jpeg",
            "https://images.foody.vn/res/g100005/1000045833/s120x120/4b76f64a-d2d7-408f-8e67-98826881-9bd79be2-220412005748.jpeg",
            "https://images.foody.vn/res/g100005/1000045833/s120x120/87204e51-e8a3-4977-bafc-90309735-7f906d7a-221007173602.jpeg",
            "https://images.foody.vn/res/g100005/1000045833/s120x120/b774adf1-8f35-40e1-b763-6ccda0ad-f001226f-220722010056.jpeg",
            "https://images.foody.vn/res/g100005/1000045833/s120x120/da4d0251-4e78-479b-a2ce-2840a7bc-7068c8dc-220717122505.jpeg",
            "https://images.foody.vn/res/g100005/1000045833/s120x120/2610d85d-8ed8-47f5-b56b-3c444526-daebbade-221009152928.jpeg"
        ]
        let queryStatement = `SELECT * FROM blogreview.location LIMIT ${limit}`;
        db.query(queryStatement, function (err, locations) {
            if (err) throw err;
            let comments = [];
            db.query("SELECT * FROM blogreview.rating_comment LIMIT 1", function (error, ratingComments) {
                if(error) throw error;
                let result = [];
                locations.forEach(function (location) {
                    let locationObj = {
                        ID: location.id,
                        thumbnail: thumbnails[getRandomNumber(0, 6)],
                        name: location.name,
                        address: {
                            specific_location: location.specific_location,
                            province: location.province,
                            district: location.district,
                            ward: location.ward
                        },
                        comments: ratingComments
                    }
                    result.push(locationObj);
                });
                return res.status(200).json(result);
            })
            // let result = [];
            // locations.forEach(function(location){
            //     let locationObj = {
            //         ID: location.id,
            //         thumbnail: thumbnails[getRandomNumber(0,6)],
            //         name: location.name,
            //         address: {
            //             specific_location: location.specific_location,
            //             province: location.province,
            //             district: location.district,
            //             ward: location.ward
            //         },
            //         comments
            //     }
            //     result.push(locationObj);
            // });

            // return res.status(200).json(result);
        })
    },

    //[GET] /post/location
    getLocationDetail(req, res, next) {
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
                    time: {
                        time_open: location.time_open,
                        time_close: location.time_close
                    },
                    price_range: {
                        max_price: location.max_price,
                        min_price: location.min_price
                    },
                    service_list: []

                };
                result.push(locationObj);
            })
            return res.status.json(result);
        })
    }

}