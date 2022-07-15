import { Header_Controller } from "./controller/Header_Controller.js";
import { Highlight_Controller } from "./controller/Highlights_Controller.js";
import { Movie_Controller } from "./controller/Movie_Controller.js";
import { Footer_Controller } from "./controller/Footer_Controller.js";

import { FUNCTIONS } from "./functions.js";

const $ = document.querySelector.bind(document);

$('.base-header').innerHTML = Header_Controller.display_header();

if (FUNCTIONS.verify_index_url(window.location.pathname)) $('.home').innerHTML = Highlight_Controller.display_highlights();

document.querySelectorAll('.test').forEach(area => area.innerHTML = Movie_Controller.display_movie());

$('.base-footer').innerHTML = Footer_Controller.display_footer();
