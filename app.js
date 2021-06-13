const routes = {
    '/login': { templateId: 'login' },
    '/dashboard': { templateId: 'dashboard' },
  };
  
function updateRoute() {
    const path = window.location.pathname;
    console.log(path)
    const route = routes[path]; 
    if (!route) {
        return navigate('/login');
    }
    const template = document.getElementById(route.templateId);
    const view = template.content.cloneNode(true);
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.appendChild(view);
    switch(path) {
        case '/dashboard':
          document.title ="Dashboard"
          console.log('dashboard is shown');
          break;
        case '/login':
          document.title ="Login page"
          console.log('Login page is shown');
          break;
        default:
          document.title ="Bank App";
      }
    
}
   
  
function navigate(path) {
    window.history.pushState(null, path, path);
    updateRoute();
}


function onLinkClick(event) {
    event.preventDefault();
    navigate(event.target.href);
}

 
window.onpopstate = () => updateRoute();
updateRoute();


