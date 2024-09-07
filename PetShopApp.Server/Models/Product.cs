using System;
using System.Collections.Generic;

namespace PetShopApp.Server.Models;

public partial class Product
{
    public long Id { get; set; }

    public string Name { get; set; } = null!;

    public string Category { get; set; } = null!;

    public decimal Price { get; set; }

    public int QuantityInStock { get; set; }

    public virtual ICollection<Sale> Sales { get; set; } = new List<Sale>();
}
