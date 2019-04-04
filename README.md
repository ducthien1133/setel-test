# Setel Test
------
## Description
Order and Payment application Api built by Node.js (express) and MongoDB.

## Introduction
**File Structure :**
```
.
|___config
|  |__config.json
|___app
|  |__controller
|  |  |_____controller.js
|  |__models
|  |  |___model.js
|  |__routes
|  |  |___routes.js
|___server.js
|___package.json
```
**Files intro :**
* config.json : store all your config information.
* models folder : this folder is for your data Schema and data setting.
* routes.js : control all HTTP Methods function.
* controller.js : how to interact with database.
* server.js : application entrance file.

Note:
> I haven't added any view (UI) yet, so I use Postman to test.

## How to use ##

#Steps to run/build

run npm install in current directory to install all dependencies

run npm start to start development server

# Order Application

In this case I set default listen port to 3000.

**Here are URL endpoint :**
* **POST** ```http://localhost:3000/orders```  -> to create new order

          ex json requets:   {
                            "name": "order2",
                            "des": "500 iphone 6",
                            "amount": 50
                            }
    

* **GET** ```http://localhost:3000/orders```  -> get all orders

* **GET** ```http://localhost:3000/orders/:orderId```  -> get current <:id> order

* **PUT** ```http://localhost:3000/orders/:orderId```  -> update current <:id> order.

         ex json requets:   {
                                "orderId": "5ca4e44ad28a8a22bc949bba",
                                "paymentAction": "confirmed"
                            }

# Payment Application

In this case I set default listen port to 4000.

**Here are URL endpoint :**
* **POST** ```http://localhost:4000/payments```  -> to create new payment

       ex json requets:     {
                                "orderId": "5ca4e44ad28a8a22bc949bba",
                                "amount" : "1"
                            }
