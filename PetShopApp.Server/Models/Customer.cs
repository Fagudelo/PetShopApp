using System;
using System.Collections.Generic;

namespace PetShopApp.Server.Models;

public partial class Customer
{
    public long Id { get; set; }

    public string Name { get; set; } = null!;

    public string? ContactInfo { get; set; }

    public string? Address { get; set; }

    public virtual ICollection<Sale> Sales { get; set; } = new List<Sale>();
}
