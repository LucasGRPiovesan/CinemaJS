const verify_index_url = pathname => {

    switch (pathname) {
        case '/':
        case '/index.html':
        case '/CinemaJS/':
        case '/CinemaJS/index.html':

            return true;
    
        default:
            return false;
    }
}

const verify_active = pathname => {

    switch (pathname) {
        
        case "/":
        case "/index.html":
        case "/CinemaJS/":
        case "/CinemaJS/index.html":

            return "./index.html"; 

        case "/tickets.html":
        case "/CinemaJS/tickets.html":

            return "./tickets.html"
        
        case "/exhibition.html":
        case "/CinemaJS/exhibition.html":

            return "./exhibition.html";

        case "/coming-soon.html":
        case "/CinemaJS/coming-soon.html":

            return "./coming-soon.html"

        case "/login.html":
        case "/CinemaJS/login.html":

            return "./login.html";

        case "/user-page.html":
        case "/CinemaJS/user-page.html":

            return "./user-page.html";
    
        default:
            break;
    }
        
}

export const FUNCTIONS = {
    verify_index_url,
    verify_active
} 
