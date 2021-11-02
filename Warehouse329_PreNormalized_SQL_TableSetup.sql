-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Warehouse329
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Warehouse329
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Warehouse329` DEFAULT CHARACTER SET utf8 ;
USE `Warehouse329` ;

-- -----------------------------------------------------
-- Table `Warehouse329`.`Employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Warehouse329`.`Employee` (
  `EmployeeID` VARCHAR(50) NOT NULL,
  `FirstName` VARCHAR(50) NOT NULL,
  `LastName` VARCHAR(50) NOT NULL,
  `Position` VARCHAR(50) NOT NULL,
  `Salary` DECIMAL NOT NULL,
  `DOB` DATETIME NOT NULL,
  `Age` INT NOT NULL AUTO_INCREMENT COMMENT 'Will be derived bas off of date of birth ',
  PRIMARY KEY (`EmployeeID`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `EmployeeID_UNIQUE` ON `Warehouse329`.`Employee` (`EmployeeID` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Warehouse329`.`Zone`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Warehouse329`.`Zone` (
  `Zone` VARCHAR(50) NOT NULL,
  `Supervisor` VARCHAR(50) NOT NULL COMMENT 'EmployeeID set to not null could not contain any assigned employees',
  `ItemType` VARCHAR(50) NOT NULL COMMENT 'ItemType set to unique since item zones should only include one tpye of item',
  PRIMARY KEY (`Zone`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `Zone_UNIQUE` ON `Warehouse329`.`Zone` (`Zone` ASC) VISIBLE;

CREATE UNIQUE INDEX `ItemType_UNIQUE` ON `Warehouse329`.`Zone` (`ItemType` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Warehouse329`.`Inventory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Warehouse329`.`Inventory` (
  `SKU` VARCHAR(50) NOT NULL,
  `CurrentStock` INT NOT NULL,
  `IncomingStock` INT NOT NULL,
  `ItemType` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`SKU`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `SKU_UNIQUE` ON `Warehouse329`.`Inventory` (`SKU` ASC) VISIBLE;

CREATE UNIQUE INDEX `ItemType_UNIQUE` ON `Warehouse329`.`Inventory` (`ItemType` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Warehouse329`.`Logistics Company`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Warehouse329`.`Logistics Company` (
  `LogisticsCompany` VARCHAR(50) NOT NULL,
  `Representative` VARCHAR(50) NOT NULL,
  `Region` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`LogisticsCompany`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Warehouse329`.`Routes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Warehouse329`.`Routes` (
  `RouteName` VARCHAR(50) NOT NULL,
  `Region` VARCHAR(50) NOT NULL,
  `LogisticsCompany` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`RouteName`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Warehouse329`.`Customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Warehouse329`.`Customer` (
  `CustomerID` INT NOT NULL,
  `Company name` VARCHAR(50) NOT NULL,
  `Location` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`CustomerID`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `CustomerID_UNIQUE` ON `Warehouse329`.`Customer` (`CustomerID` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Warehouse329`.`Orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Warehouse329`.`Orders` (
  `OrderID` INT NOT NULL,
  `RouteName` VARCHAR(50) NOT NULL,
  `CustomerID` INT NOT NULL,
  `Date Ordered` DATETIME NOT NULL,
  `Ship Date` DATETIME NOT NULL,
  PRIMARY KEY (`OrderID`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `OrderID_UNIQUE` ON `Warehouse329`.`Orders` (`OrderID` ASC) VISIBLE;

CREATE UNIQUE INDEX `CustomerID_UNIQUE` ON `Warehouse329`.`Orders` (`CustomerID` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Warehouse329`.`ReceivedOrder`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Warehouse329`.`ReceivedOrder` (
  `ReceivedOrderID` INT NOT NULL,
  `Carrier` VARCHAR(50) NOT NULL,
  `DateOrdered` DATETIME NOT NULL,
  `DateShipped` DATETIME NOT NULL,
  PRIMARY KEY (`ReceivedOrderID`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `ReceivedOrderID_UNIQUE` ON `Warehouse329`.`ReceivedOrder` (`ReceivedOrderID` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Warehouse329`.`ReceivedOrderItem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Warehouse329`.`ReceivedOrderItem` (
  `SKU` VARCHAR(50) NOT NULL,
  `OrderID` INT NOT NULL,
  `QTY` INT NOT NULL,
  PRIMARY KEY (`SKU`, `OrderID`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `SKU_UNIQUE` ON `Warehouse329`.`ReceivedOrderItem` (`SKU` ASC) VISIBLE;

CREATE UNIQUE INDEX `OrderID_UNIQUE` ON `Warehouse329`.`ReceivedOrderItem` (`OrderID` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `Warehouse329`.`OrderItem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Warehouse329`.`OrderItem` (
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
CREATE TABLE IF NOT EXISTS `Warehouse329`.`AssignedZone` (
  `EmployeeID` VARCHAR(50) NOT NULL,
  `Zone` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`EmployeeID`, `Zone`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `EmployeeID_UNIQUE` ON `Warehouse329`.`AssignedZone` (`EmployeeID` ASC) VISIBLE;

CREATE UNIQUE INDEX `Zone_UNIQUE` ON `Warehouse329`.`AssignedZone` (`Zone` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
