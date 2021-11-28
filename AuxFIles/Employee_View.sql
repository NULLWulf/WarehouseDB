SELECT Employee.FirstName, Employee.LastName, Employee.Position,Employee.Salary, AssignedZone.Zone
	FROM Employee, AssignedZone
	WHERE Employee.EmployeeID = AssignedZone.EmployeeID;