using DOTNETCOREWithAngular_Assessment.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DOTNETCOREWithAngular_Assessment.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : ControllerBase
    {

        [HttpGet]
        public List<Movies> Get()
        {
            return GetMovies();
        }

        public List<Movies> GetMovies()
        {
            string file = "movies.json";
            try
            {
                using (StreamReader r = new StreamReader(file))
                {
                    string json = r.ReadToEnd();
                    Root root = JsonConvert.DeserializeObject<Root>(json);
                    return root.movies;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        
        public Movies GetMovie(string title)
        {
            List<Movies> movies = GetMovies();
            var movie = movies.Find(x => x.Title.Equals(title, StringComparison.OrdinalIgnoreCase));
            return movie;
        }
    }
}
