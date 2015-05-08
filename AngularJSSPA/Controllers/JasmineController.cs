using System;
using System.Web.Mvc;

namespace App.AngularJSSPA.Controllers
{
    public class JasmineController : Controller
    {
        public ViewResult Run()
        {
            return View("SpecRunner");
        }
    }
}
