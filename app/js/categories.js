import HttpRequest from "./HttpRequest.js";
import createMenu from "./CreateMenu.js";
import ListenerForHeaderLink from "./transitionOnLinks.js";

ListenerForHeaderLink();
HttpRequest("http://localhost:3000/api/catalog_packeges.json", createMenu);

