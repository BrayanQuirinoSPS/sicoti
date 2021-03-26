# Referencias

## Comandos importantes:

|Comando|REACT|Ubuntu|  GIT | Oracle |  Descripción |
|---|:---:|:---:|:---:|:---:|---|
|npx create-react-app nombreDeLaApp|x|   |   |   | Nos crea un una app desde una base ya diseñada.|
|clip < texto.**extencion**|  | x |  x |   | Te hace un Crtl+C de algun archivo sin tener que abrir el archivo, selecionar y copiar, más fácil.   |
|echo "Algo que quieras" > archivo.**extencion**|   | x  |  x |   | Te crea un archivo con algo que quieras poner dentro.  |
|git config -e|||x||Te abre la configuracion de git para poder editarla. Ejemplo credentials.helper:store|
|sudo npm cache clean -f</br>sudo npm install -g n</br>sudo n stable</br>sudo n latest||x|||Comandos para actulizar npm y nodejs|
|git config credential.helper store||x|x||Nos guarda las credenciales en el disco para no tener que repetirlas en cada push|
|sudo ./filebeat -e -c /etc/filebeat/filebeat.yml -d "publish"||x|||Correr filebeat como en windows:</br>Situarse en la carpeta /usr/share/filebeat/bin y ejecutar</br>Si necesitamos correr de nuevo borrar la carpeta **data**|
|sudo -u logstash /usr/share/logstash/bin/logstash -f /etc/logstash/conf.d/**filebeat.conf**||x|||Correr logstash como en windows pero solo un pipeline|
|[Instalar filebeat](https://kifarunix.com/install-and-configure-filebeat-7-on-ubuntu-18-04-debian-9-8/)||x||||
|[Instalar logstash](https://kifarunix.com/install-and-configure-logstash-7-on-ubuntu-18-debian-9-8/)||x||||
|[Configurar grok](https://kifarunix.com/how-to-debug-logstash-grok-filters/)||x||||
|git checkout .|||x||Borra los cambios que hayas hecho y te regresa al estado del repositorio remoto|
|||||||


## Links cursos:

React desde 0 canal midudev:
- https://www.youtube.com/watch?v=T_j60n1zgu0&feature=youtu.be

Reactjs curso canal fazt:
- https://www.youtube.com/watch?v=zIY87vU33aA&t=3s

React redux,action,reducer,store curso 20 videos(cortos) canal gammafp
- https://www.youtube.com/watch?v=mitOmHw5e0o 

Crear un app con React usando npx create-react-app canal midudev:
- https://www.youtube.com/watch?v=QBLbXgeXMU8

Cosas de Css-flex canal Codigo del futuro
- https://www.youtube.com/watch?v=iz50F9EJQAA

## Conceptos y tutoriales importantes:
|Concepto|Descipción|
|---|---|
|MERN|MongoDB, Express, REACT, NodeJS| 
|GrahpQL|Digamos quien hara las consultas al servidor.|
|Ionic4|Framework para hacer aplicaciones en movil, ya es agnostico.|
|Agnostico|No está casdo con alguna tecnología o vendor.|
|Vendor|Compañia que suministra, ofrece software.|
|Babel|Paquete que nos ayuda a trasncribir JSX a JS|
|CRUD|Create, Read, Update, Delete|
|hooks|"Manejador de componentes"|
|useState()|Sirve para manejar el estado de un componente, es como set y get|
|[Host para tu pagina con Github](https://www.youtube.com/watch?v=OUsC13AEiUQ)|Tutorial para construir tu proyecto React y subirlo a GitHub.io|
|[Sintasix de Markdown](https://www.markdownguide.org/basic-syntax)||
|[Generador de tablas markdown](https://www.tablesgenerator.com/markdown_tables#)||
|[Login react](https://medium.com/swlh/persisting-data-with-redux-thunk-session-storage-in-react-application-9cc94549a1c)|Curso de react para hacer un login con paginacion, store, persintencia y onSubmit|
|[localStorage y sessionStorage](https://javascript.info/localstorage#:~:text=LocalStorage%2C%20sessionStorage%201%20Unlike%20cookies%2C%20web%20storage%20objects,objects%2C%20they%20can%E2%80%99t%20access%20data%20from%20each%20other.)|Como funciona la persistencia de datos en los buscadores, muy enlazado al medium de arriba|
|[Animación DropDownMenu](https://www.youtube.com/watch?v=IF6k0uZuypA)|Curso para realizar una animación de izquierda a derecha de los menus|
|[Redireccionamiento si no estás logeado](https://jasonwatmore.com/post/2019/02/01/react-role-based-authorization-tutorial-with-example)|Curso y [github](https://github.com/cornflourblue/react-role-based-authorization-example)|


## Paquetes cools:

|Paquete|Función|Enlaces|
|---|---|---|
|react-bootstrap|bootstrap para react|[react-bootstrap](https://react-bootstrap.github.io/)|
|react-date-picker|Te crea un compoente para escoger una fecha. Hay que cambiar locale("es-ES")|[react-date-picker](https://www.npmjs.com/package/react-date-picker)|
|uuid|Te genera ids aleatorios del tipo string|[uuid](https://www.npmjs.com/package/uuid)|
|mdbreact|Paquete que tiene componentes bastante cools solo que algunos componentes son de paga|[mdbreact](https://mdbootstrap.com/docs/react/getting-started/download/)|
|react-redux|Es un puente entre react y redux|[reac-redux](https://www.npmjs.com/package/react-redux)|
|react-router-dom|Nos permite cambiar de ruta (ejemplo: de /login a /home)|[react-router-dom](https://www.npmjs.com/package/react-router-dom)|
|redux|De forma muy general nos permite guardar datos para usarlos después|[redux](https://www.npmjs.com/package/redux)|
|react-icons|Puedes usar iconos sin necesidad de manejarlos como imagen|[react-icons](https://www.npmjs.com/package/react-icons)|
|react-simple-tree-menu|Un menu el cual funciona como acordion, facilicimo de usar, muy bueno|[react-simple-tree-menu](https://www.npmjs.com/package/react-simple-tree-menu)|
|rxjs|Es una extencion para JavaScript|[rxjs](https://www.npmjs.com/package/rxjs)|

## Links para el futuro:

How to do a social media app with react canal <h>freeCodeCamp.org</h>:
- https://www.youtube.com/watch?v=n1mdAPFq2Os&feature=youtu.be

Nextjs curso canal fazt:
- https://www.youtube.com/watch?v=Tn6QYliFBcs&t=125s

Ionic4 & angular canal fazt:</br>
<h>Nota: Son varios videos.</h>
- https://www.youtube.com/watch?v=MMRqyQVQ980&t=187s


