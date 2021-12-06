/* Stock Overview View - Written by Nathan Wolf */ 

select ItemType, AVG(Inventory.CurrentStock) 'Avg # of Item in Stock', AVG(Inventory.IncomingStock) 'Avg # of Item in Incoming Stock',
SUM(Inventory.CurrentStock) 'Total Stock', SUM(Inventory.IncomingStock) 'Total Incoming Stock' 
from Inventory
group by ItemType;