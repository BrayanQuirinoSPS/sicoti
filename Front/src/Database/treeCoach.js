export const tree = [
    {
      key: 'Inicio',
      label: 'Inicio',
      url:'/page',
      central:'central'
    },
    {
      key: 'Mis Aplicaciones',
      label: 'Mis Aplicaciones',
      url:'/page',
      nodes: [
        {
          key: 'Aplicaciones',
          label: 'Aplicaciones',
          url:'/page',
          central:'centralUno'
        },
        {
          key: 'Practicas',
          label: 'Prácticas',
          url:'/page',
          central:'centralUno'
        }
      ],
    },
    {
        key: 'Cerrar Sesion',
        label: 'Cerrar Sesión',
        url:'/page',
        central:'logout'
    }
  ];