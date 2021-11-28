select Inventory.ItemType, count(ALL Inventory.ItemName) as Distint_Items_Of_Time
from Inventory
GROUP BY ItemType;