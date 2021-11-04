-- Modified CREATEs by Nathaniel Wolf
-- Initial Table Setup by Stephen Paolini

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

USE `Warehouse329`;

-- -----------------------------------------------------
-- Table `Warehouse329`.`Employee`
-- -----------------------------------------------------
CREATE TABLE `Employee` (
  `EmployeeID` VARCHAR(50) NOT NULL,
  `FirstName` VARCHAR(50) NOT NULL,
  `LastName` VARCHAR(50) NOT NULL,
  `Position` VARCHAR(50) NOT NULL,
  `Salary` DECIMAL NOT NULL,
  `DOB` DATE NOT NULL,
  `Age` INT NOT NULL,  -- will be calculated based on DOB at some point 
  PRIMARY KEY (`EmployeeID`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `EmployeeID_UNIQUE` ON `Warehouse329`.`Employee` (`EmployeeID` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Warehouse329`.`Zone`
-- -----------------------------------------------------
CREATE TABLE `Zone` (
  `Zone` VARCHAR(50) NOT NULL,
  `Supervisor` VARCHAR(50) NOT NULL COMMENT 'EmployeeID set to not null could not contain any assigned employees',
  `ItemType` VARCHAR(50) NOT NULL COMMENT 'ItemType set to unique since item zones should only include one tpye of item',
  PRIMARY KEY (`Zone`,`ItemType`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `Zone_UNIQUE` ON `Warehouse329`.`Zone` (`Zone` ASC) VISIBLE;

CREATE UNIQUE INDEX `ItemType_UNIQUE` ON `Warehouse329`.`Zone` (`ItemType` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Warehouse329`.`Inventory`
-- -----------------------------------------------------
CREATE TABLE `Inventory` (
  `SKU` VARCHAR(50) NOT NULL,
  `CurrentStock` INT NOT NULL,  -- Will need to be a calculated field at some poimt
  `IncomingStock` INT NOT NULL,  -- will need to be a calculated field at some point
  `ItemType` VARCHAR(50) NOT NULL,
  `ItemName` VARCHAR(50) NOT NULL,

  PRIMARY KEY (`SKU`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `SKU_UNIQUE` ON `Warehouse329`.`Inventory` (`SKU` ASC) VISIBLE;
-- CREATE UNIQUE INDEX `ItemType_UNIQUE` ON `Warehouse329`.`Inventory` (`ItemType` ASC) VISIBLE;
-- removed for time being assumption is does not need to be unique because could have varieties of efforts. 

-- -----------------------------------------------------
-- Table `Warehouse329`.`Logistics Company`
-- -----------------------------------------------------
CREATE TABLE `Logistics_Company` (
  `LogisticsCompany` VARCHAR(50) NOT NULL,
  `Representative` VARCHAR(50) NOT NULL,
  `Region` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`LogisticsCompany`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `LogisticsCompany_UNIQUE` ON `Warehouse329`.`Logistics_Company` (`LogisticsCompany` ASC) VISIBLE;

-- -----------------------------------------------------
-- Table `Warehouse329`.`Routes`
-- -----------------------------------------------------
CREATE TABLE `Routes` (
  `RouteName` VARCHAR(50) NOT NULL,
  `Region` VARCHAR(50) NOT NULL,
  `LogisticsCompany` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`RouteName`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `RouteName_UNIQUE` ON `Warehouse329`.`Routes` (`RouteName` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Warehouse329`.`Customer`
-- -----------------------------------------------------
CREATE TABLE `Customer` (
  `CustomerID` INT NOT NULL,
  `Company name` VARCHAR(50) NOT NULL,
  `Location` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`CustomerID`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `CustomerID_UNIQUE` ON `Warehouse329`.`Customer` (`CustomerID` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Warehouse329`.`Orders`
-- -----------------------------------------------------
CREATE TABLE `Orders` (
  `OrderID` INT NOT NULL,
  `RouteName` VARCHAR(50) NOT NULL,
  `CustomerID` INT NOT NULL,
  `Date Ordered` DATE NOT NULL,
  `Ship Date` DATE NOT NULL,
  PRIMARY KEY (`OrderID`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `OrderID_UNIQUE` ON `Warehouse329`.`Orders` (`OrderID` ASC) VISIBLE;

CREATE UNIQUE INDEX `CustomerID_UNIQUE` ON `Warehouse329`.`Orders` (`CustomerID` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Warehouse329`.`ReceivedOrder`
-- -----------------------------------------------------
CREATE TABLE `ReceivedOrder` (
  `ReceiveOrderId` INT NOT NULL,
  `Carrier` VARCHAR(50) NOT NULL,
  `DateOrdered` DATE NOT NULL,
  `DateShipped` DATE NOT NULL,
  PRIMARY KEY (`ReceiveOrderId`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `ReceiveOrderId_UNIQUE` ON `Warehouse329`.`ReceivedOrder` (`ReceiveOrderId` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Warehouse329`.`ReceivedOrderItem`
-- -----------------------------------------------------
CREATE TABLE `ReceivedOrderItem` (
  `SKU` VARCHAR(50) NOT NULL,
  `ReceiveOrderId` INT NOT NULL,
  `QTY` INT NOT NULL,
  PRIMARY KEY (`SKU`, `ReceiveOrderId`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `SKU_UNIQUE` ON `Warehouse329`.`ReceivedOrderItem` (`SKU` ASC) VISIBLE;

CREATE UNIQUE INDEX `OrderID_UNIQUE` ON `Warehouse329`.`ReceivedOrderItem` (`ReceiveOrderId` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Warehouse329`.`OrderItem`
-- -----------------------------------------------------
CREATE TABLE `OrderItem` (
  `SKU` VARCHAR(50) NOT NULL,
  `OrderID` INT NOT NULL,
  `QTY` INT NOT NULL,
  PRIMARY KEY (`SKU`, `OrderID`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `SKU_UNIQUE` ON `Warehouse329`.`OrderItem` (`SKU` ASC) VISIBLE;

CREATE UNIQUE INDEX `OrderID_UNIQUE` ON `Warehouse329`.`OrderItem` (`OrderID` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Warehouse329`.`AssignedZone`
-- -----------------------------------------------------
CREATE TABLE `AssignedZone` (
  `EmployeeID` VARCHAR(50) NOT NULL,
  `Zone` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`EmployeeID`, `Zone`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `EmployeeID_UNIQUE` ON `Warehouse329`.`AssignedZone` (`EmployeeID` ASC) VISIBLE;

CREATE UNIQUE INDEX `Zone_UNIQUE` ON `Warehouse329`.`AssignedZone` (`Zone` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
