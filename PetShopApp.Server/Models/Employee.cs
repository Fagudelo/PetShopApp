using System;
using System.Collections.Generic;

namespace PetShopApp.Server.Models;

public partial class Employee
{
    public long Id { get; set; }

    public string Name { get; set; } = null!;

    public string Position { get; set; } = null!;

    public decimal Salary { get; set; }

    public DateOnly HireDate { get; set; }

    public virtual ICollection<Sale> Sales { get; set; } = new List<Sale>();
}
