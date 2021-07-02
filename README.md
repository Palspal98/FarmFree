# FarmFree
http://103.127.146.165/wiki/index.php?title=InfernoLabs:Main


```sql
CREATE USER 'InfernoLabs'@'localhost' IDENTIFIED BY 'password@12345';
GRANT ALL PRIVILEGES ON FarmFree.* TO 'InfernoLabs'@'localhost';
FLUSH PRIVILEGES;

CREATE DATABASE FarmFree;

CREATE TABLE `orders` (
  `orderId` int NOT NULL,
  `bidId` int NOT NULL,
  `hasPaid` tinyint NOT NULL,
  `reviewDetails` int NOT NULL,
  `paymentHash` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`orderId`)
);
```