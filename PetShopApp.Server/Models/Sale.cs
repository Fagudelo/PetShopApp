using System;
using System.Collections.Generic;

namespace PetShopApp.Server.Models;

public partial class Sale
{
    public long Id { get; set; }

    public long? ProductId { get; set; }

    public long? CustomerId { get; set; }

    public long? EmployeeId { get; set; }

    public DateOnly SaleDate { get; set; }

    public int QuantitySold { get; set; }

    public decimal TotalAmount { get; set; }

    public virtual Customer? Customer { get; set; }

    public virtual Employee? Employee { get; set; }

    public virtual Product? Product { get; set; }
}
