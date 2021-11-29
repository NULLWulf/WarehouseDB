/* Zone Employee Counts */
select AssignedZone.Zone, COUNT(DISTINCT EmployeeID) as Assigned_Employees
from AssignedZone, Inventory
GROUP BY Zone
ORDER BY Zone;

/* Distinct Items in Zone */
select Inventory.ItemType, count(ALL Inventory.ItemName) as Distint_Items_Of_Time
from Inventory
GROUP BY ItemType;

/* Employee All Employees and Their Assigned Zone */
SELECT Employee.FirstName, Employee.LastName, Employee.Position,Employee.Salary, AssignedZone.Zone
FROM Employee, AssignedZone
WHERE Employee.EmployeeID = AssignedZone.EmployeeID;

/* Orders and their associated routes */
SELECT Orders.OrderID, Orders.CustomerID, Orders.RouteName, Routes.Region
FROM Orders, Routes
WHERE Orders.RouteName = Routes.RouteName;

/* Todo */