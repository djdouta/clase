import crossroads from "crossroads";
import homeController from "./controllers/homeController";

function router() {
  crossroads.addRoute("", function() {
    $("#root").load("./partials/home.html", homeController);
    console.log("Home pasadage");
  });

  crossroads.addRoute("#/contact", function() {
    $("#root").load("./partials/contact.html", homeController);
    console.log("contacto");
  });

  // En cada cambio del # va a verificar las rutas
  $(window).on("hashchange", function() {
    crossroads.parse(window.location.hash);
  });

  crossroads.parse(window.location.hash);
}

export default router;
