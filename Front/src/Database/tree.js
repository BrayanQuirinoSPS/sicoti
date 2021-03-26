export const tree = [
    {
      key: 'Inicio',
      label: 'Inicio',
      url:'/page',
      central:'central'
    },
    {
      key: 'Mis Evaluaciones',
      label: 'Mis Evaluaciones',
      url:'/page',
      nodes: [
        {
          key: 'Evaluaciones',
          label: 'Evaluaciones',
          url:'/page',
          central:'centralUno'
        },
        {
          key: 'Resultados',
          label: 'Resultados',
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