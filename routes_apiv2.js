var express = require('express');
var router = express.Router();
var path = require('path')

var users = [
    {"results":[{"gender":"male","name":{"title":"mr","first":"caleb","last":"young"},"location":{"street":"6540 station road","city":"dundee","state":"county tyrone","postcode":"NM95 0FD"},"email":"caleb.young@example.com","login":{"username":"greenbird828","password":"booker","salt":"LI4Yzi8i","md5":"ef04e1da755004843fedb7189532fda6","sha1":"3fe9e0211e4469e4deb2fe5c122aecdd3b23a14e","sha256":"42810e90e01ca548c7cda624f3cde9ddd81d4dbe8b583804ae7caa86cf31d6fd"},"dob":"1994-06-26 03:49:29","registered":"2008-05-12 21:30:26","phone":"016977 34847","cell":"0723-918-521","id":{"name":"NINO","value":"ZP 68 90 16 K"},"picture":{"large":"https://randomuser.me/api/portraits/men/53.jpg","medium":"https://randomuser.me/api/portraits/med/men/53.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/53.jpg"},"nat":"GB"}],"info":{"seed":"727b1ae15bc65d43","results":1,"page":1,"version":"1.1"}},
    {"results":[{"gender":"male","name":{"title":"mr","first":"mitchell","last":"freeman"},"location":{"street":"9049 main road","city":"birmingham","state":"strathclyde","postcode":"Y13 2TY"},"email":"mitchell.freeman@example.com","login":{"username":"crazysnake598","password":"tennis","salt":"XbH9WuJL","md5":"70cf084632c2fdc20d163bb8b7bf8219","sha1":"a72cd6711eed0bd808ba5fddcc44fc788f21c6e1","sha256":"eb01061daa51cf974a1cd16ef603ca4777f3ec603f95bc37ac38d6aca6bf26c2"},"dob":"1978-03-15 12:06:37","registered":"2012-01-26 07:01:11","phone":"01521 89240","cell":"0782-438-237","id":{"name":"NINO","value":"ZY 25 14 62 C"},"picture":{"large":"https://randomuser.me/api/portraits/men/4.jpg","medium":"https://randomuser.me/api/portraits/med/men/4.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/4.jpg"},"nat":"GB"}],"info":{"seed":"3f19ffbb90091c45","results":1,"page":1,"version":"1.1"}},
    {"results":[{"gender":"female","name":{"title":"ms","first":"maria","last":"jørgensen"},"location":{"street":"7717 byvejen","city":"nørrebro","state":"hovedstaden","postcode":43367},"email":"maria.jørgensen@example.com","login":{"username":"crazyostrich364","password":"5678","salt":"YziS8C7D","md5":"e2fc2bc315fa341fdba3df0c58d0e4e7","sha1":"b141963b2f71219b53ee5d3e228eaf8e41ab1ad3","sha256":"8fc0c6016377383f6b833c78bf9461258303c161660673008a6e4d44a500139a"},"dob":"1987-04-03 04:07:40","registered":"2008-03-26 11:21:07","phone":"97948666","cell":"83051631","id":{"name":"CPR","value":"715484-0309"},"picture":{"large":"https://randomuser.me/api/portraits/women/72.jpg","medium":"https://randomuser.me/api/portraits/med/women/72.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/72.jpg"},"nat":"DK"}],"info":{"seed":"dd3a456f0b9b870c","results":1,"page":1,"version":"1.1"}}];

router.get('/', function(request, response) {
    response.send('Hello Avans!');
})

router.get('/query', function(request, response) {
    var year = request.query.year|| 'NO QUERY SPECIFIED'
    response.contentType('application/json');
    response.json({'year':year})
})

router.get('/api', function(request, response) {
    response.contentType('application/json');
    var randomnumber = Math.floor(Math.random() * users.length);
    response.json(users[randomnumber])
})

router.get('/about', function(request, response) {
    response.send('Written by Alexander Van den Bulck');
})
router.post('/', function(request, response) {
    response.send('Hello Avans, POST request received!');
})
router.put('/', function(request, response) {
    response.send('Hello Avans, PUT request received!');
})

router.all('*', function(request, response) {
    response.status(404);
    response.send('404 - Not found');
})


module.exports = router;