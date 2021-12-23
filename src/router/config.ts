const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/comprar"],
    exact: true,
    component: "Comprar",
  },
  {
    path: ["/vender"],
    exact: true,
    component: "Vender",
  },  
  {
    path: ["/tarifas"],
    exact: true,
    component: "Tarifas",
  },    
];

export default routes;
