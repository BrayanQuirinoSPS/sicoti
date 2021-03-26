export const tree = [
    {
      key: 'Inicio',
      label: 'Inicio',
      url:'/page',
      central:'central'
    },
    {
      key: 'Ajustes',
      label: 'Ajustes',
      url:'/page',
      nodes: [
        {
          key: 'Configuracion',
          label: 'Configuración',
          url:'/page',
          central:'centralUno'
        },
        {
          key: 'Administracion',
          label: 'Administración',
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