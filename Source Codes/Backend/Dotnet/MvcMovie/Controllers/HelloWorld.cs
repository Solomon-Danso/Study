using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace LearnDotnetMVC.Controllers;
public class HelloWorldController: Controller{

public IActionResult Index(){
    return View();
}



// GET: /HelloWorld/Welcome/ 
// Requires using System.Text.Encodings.Web;
public IActionResult Welcome(string name, int numTimes)
{
    ViewData["Message"] = "Hello, " + name;
    ViewData["NumTimes"] = numTimes;

    return View();
}


}


