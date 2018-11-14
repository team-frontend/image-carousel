# Router Endpoints for Zillow image carousel

The following API endpoints have been defined for
client side and server side usage:

| Endpoint      | Method        | Description  |
| ------------- |:-------------:| -----:|
| /images | POST | Add a new image to the database |
| /images/:image | GET | Retrieve an image by id |
| /images/:image | PATCH | Update an image by id |
| /images/:image | DELETE | Delete an image by id |
| /images/houses/:house | GET | Retrieve all images by houseId |
| /images/houses/:house | POST | Add all images to houseId |
| /images/houses/:house | PATCH | Edit image group by houseId |
| /images/houses/:house | DELETE | Delete image group by houseId |
