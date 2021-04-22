using Microsoft.VisualStudio.TestTools.UnitTesting;
using DOTNETCOREWithAngular_Assessment.Controllers;
using System;
using System.Collections.Generic;
using System.Text;

namespace DOTNETCOREWithAngular_Assessment.Controllers.Tests
{
    [TestClass()]
    public class MovieControllerTests
    {
        [TestMethod()]
        public void GetTest()
        {
            MovieController movie = new MovieController();

            var lstMovies = movie.Get();

            Assert.IsNotNull(lstMovies);
            Assert.IsTrue(lstMovies.Count > 0);
        }
    }
}