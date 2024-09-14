using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PetShopApp.Server.Models;
using System.Numerics;

namespace PetShopApp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController(PetShopDbContext dbContext) : ControllerBase
    {
        private readonly PetShopDbContext _dbContext = dbContext;

        [HttpGet]
        [Route("List")]
        public async Task<IActionResult>List()
        {
            List<Product> list = await _dbContext.Products.OrderByDescending(p => p.Id).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, list);
        }

        [HttpPost]
        [Route("Add")]

        public async Task<IActionResult> Add([FromBody] Product product)
        {
            await _dbContext.Products.AddAsync(product);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

        [HttpPut]
        [Route("Update")]

        public async Task<IActionResult> Update([FromBody] Product product)
        {
            _dbContext.Products.Update(product);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

        [HttpDelete]
        [Route("Delete/{id}")]

        public async Task<IActionResult> Delete(long id)
        {
            Product product = _dbContext.Products.Find(id);

            _dbContext.Products.Remove(product);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "Ok");
        }
    }
}
