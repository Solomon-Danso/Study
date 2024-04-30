using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using LearnDotnetMVC.Models;

namespace LearnDotnetMVC.Data
{
    public class LearnDotnetMVCcontext : DbContext
    {
        public LearnDotnetMVCcontext (DbContextOptions<LearnDotnetMVCcontext> options)
            : base(options)
        {
        }

        public DbSet<Movie> Movie { get; set; } = default!;
    }
}
