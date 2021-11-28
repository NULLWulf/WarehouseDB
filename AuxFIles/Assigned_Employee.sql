select AssignedZone.Zone, COUNT(DISTINCT EmployeeID) as Assigned_Employees
from AssignedZone, Inventory

GROUP BY Zone
ORDER BY Zone;