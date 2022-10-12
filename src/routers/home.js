const express = require('express');
const router = express.Router();

// Controller



// [GET] /
router.get("/",function(req,res){
    return res.json({"Id":112158,"Name":"Oromia Coffee - Nam Kỳ Khởi Nghĩa","Address":"193A/D3 Nam Kỳ Khởi Nghĩa","District":"Quận 3","City":"TP. HCM","DistrictId":5,"Location":"ho-chi-minh","LocationId":217,"Phone":null,"Cuisines":[{"Id":1,"Name":"Món Việt","NameEn":null,"ASCIIName":null,"DetailUrl":"/ho-chi-minh/dia-diem-phong-cach-viet-nam"}],"SpecialDesc":null,"Categories":[{"Id":2,"Name":"Café/Dessert","NameEn":null,"ASCIIName":null,"DetailUrl":null}],"Services":[{"Id":1,"Type":0,"Url":"/ho-chi-minh/oromia-coffee-nam-ky-khoi-nghia/goi-mon","Title":null,"Text":"Giao tận nơi","Avatar":null,"BackgroundColor":null,"RestaurantId":0,"Description":null}],"Latitude":10.7864664,"Longitude":106.687142,"MainCategoryId":2,"MasterCategoryId":1,"HasDelivery":true,"HasBooking":false,"TotalReview":1197,"TotalView":284697,"TotalFavourite":1865,"TotalCheckins":361,"TotalPictures":6636,"AvgRating":"7.8","AvgRatingOriginal":7.774,"PicturePath":"https://images.foody.vn/res/g12/112158/prof/s180x180/foody-mobile-1-jpg-194-636289977329979410.jpg","PicturePathLarge":"https://images.foody.vn/res/g12/112158/prof/s640x400/foody-mobile-1-jpg-194-636289977329979410.jpg","MobilePicturePath":"https://images.foody.vn/res/g12/112158/prof/s640x400/foody-mobile-1-jpg-194-636289977329979410.jpg","ReviewUrl":"/ho-chi-minh/oromia-coffee-nam-ky-khoi-nghia/binh-luan","AlbumUrl":"/ho-chi-minh/oromia-coffee-nam-ky-khoi-nghia/album-anh","IconUrl":null,"IsAd":false,"DetailUrl":"/ho-chi-minh/oromia-coffee-nam-ky-khoi-nghia"})
});

module.exports = router;