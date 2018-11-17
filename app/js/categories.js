import HttpRequest from "./HttpRequest.js";
import createMenu from "./CreateMenu.js";

HttpRequest("http://localhost:3004/api/catalog_packeges.json", createMenu);