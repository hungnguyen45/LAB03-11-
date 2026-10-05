using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LAB03_11_.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult BAI5()
        {
            return View();
        }
        public ActionResult BAI4()
        {
            return View();
        }
        public ActionResult BAI3()
        {
            return View();
        }
        public ActionResult BAI2()
        {
            return View();
        }
        public ActionResult BAI1()
        {
            return View();
        }
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}