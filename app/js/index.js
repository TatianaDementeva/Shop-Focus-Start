import HttpRequest from "./HttpRequest.js";
import processScrolling from "./scrollingTheCarousel.js";

HttpRequest('http://localhost:3000/api/app_packeges.json', processScrolling);
