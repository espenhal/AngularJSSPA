// --------------------------------------------------------------------------------------------------------------------
// <copyright file="BundleConfig.cs" company="">
//   Copyright � 2015 
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.AngularJSSPA
{
    using System.Web;
    using System.Web.Optimization;

    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/content/app").Include("~/content/app.css"));

            //bundles.Add(new ScriptBundle("~/js/jquery").Include("~/scripts/vendor/jquery-{version}.js"));

            //bundles.Add(new ScriptBundle("~/js/app").Include(
            //    "~/scripts/vendor/angular-ui-router.js",
            //    "~/scripts/filters.js",
            //    "~/scripts/services.js",
            //    "~/scripts/directives.js",
            //    "~/scripts/controllers.js",
            //    "~/scripts/app.js"));
            
            bundles.Add(new ScriptBundle("~/js/scripts")
                .Include("~/scripts/angular.js")
                .Include("~/scripts/vendor/angular-ui-router.js")
                .Include("~/scripts/vendor/jquery-{version}.js")
                .Include("~/scripts/angular-resource.js"));

            bundles.IgnoreList.Ignore("*.spec.js");
            bundles.Add(new ScriptBundle("~/js/app").IncludeDirectory("~/app/", "*.js", true));
        }
    }
}
