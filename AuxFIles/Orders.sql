SELECT Orders.OrderID, Orders.CustomerID, Orders.RouteName, Routes.Region
	FROM Orders, Routes
		WHERE Orders.RouteName = Routes.RouteName;