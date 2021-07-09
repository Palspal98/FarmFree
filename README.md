# FarmFree

http://103.127.146.165/wiki/index.php?title=InfernoLabs:Main

```sql
CREATE USER 'InfernoLabs'@'localhost' IDENTIFIED BY 'password@12345';
GRANT ALL PRIVILEGES ON FarmFree.* TO 'InfernoLabs'@'localhost';
FLUSH PRIVILEGES;

CREATE DATABASE FarmFree;
```

# Crop

# Bid

# Order

Database commands

```sql
CREATE TABLE `orders` (
  `orderId` int NOT NULL,
  `bidId` int NOT NULL,
  `hasPaid` tinyint NOT NULL,
  `reviewDetails` int NOT NULL,
  `paymentHash` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`orderId`)
);
```

cURL commands

```bash
curl --location --request GET 'http://localhost:3000/order/12/addReview?reviewDetails=3'

curl --location --request GET 'http://localhost:3000/order/12/getOrderDetails'
```

1st cURL command creates an entry into our DB.
And we retrieve it using the second.

```json
{
  "orderId": 12,
  "bidId": -1,
  "hasPaid": 0,
  "reviewDetails": 3,
  "paymentHash": "hlk2a"
}
```

# Make Payment

Go to `http://localhost:3000/checkout.html`
Successfully pay and the DB row will have gotten updated.
( Note: Run `node tests/Order.js` first )

For testing purposes:

```
Payment succeeds:                       4242 4242 4242 4242
Payment is declined:                    4000 0000 0000 9995
```

UI Screens:

![pic1](https://user-images.githubusercontent.com/40122794/124977485-27848800-e04e-11eb-9c62-401bb69390d0.png)

![pic2](https://user-images.githubusercontent.com/40122794/124955586-c7351c80-e034-11eb-882b-cef47e547408.png)

# Release

`pkg --output build/web .`