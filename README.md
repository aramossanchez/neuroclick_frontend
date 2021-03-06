# NEUROCLICK (FRONTEND)

## PARTE FRONTAL QUE CONECTA CON LA API DE LA APLICACI脫N (https://github.com/aramossanchez/neuroclick_backend) 馃馃

![LOGO APLICACION](src/img/screenshot/logo-login.png)

## APLICACI脫N PARA LA GESTI脫N DE UNA CL脥NICA DE NEUROREHABILITACI脫N 馃

Aplicaci贸n con la que gestionar los diferentes usuarios y profesionales de una cl铆nica de neurorehabiliaci贸n.
Entre las diferentes funciones que tiene la aplicaci贸n cabe destacar:
* Login en la aplicaci贸n.
* Existencia de diferentes roles dentro de la aplicaci贸n (admin, Administraci贸n, y profesionales encargados de los tratamientos a los usuarios).
* La posibilidad de dejar guardados los resultados de las pruebas estandarizadas realizadas al usuario, por cada tipo de profesional trabajando en la cl铆nica (Fisioterapia, Terapia Ocupacional, Neuropsicolog铆a y Logopedia).
* La posibilidad de que cualquier profesional (de los mencionados anteriormente) pueda acceder al hist贸rico de cada una de las pruebas realizadas a cualquier usuario.
* La limitaci贸n de crear nuevas pruebas solamente del mismo tipo de profesional logado en la aplicaci贸n.
* Solo los profesionales con perfil de Administraci贸n podr谩n editar los datos de los usuarios, as铆 como dar de alta a nuevos usuarios y profesionales, pero no tendr谩n acceso a las pruebas.
* El profesional con perfil de admin tendr谩 acceso a todas las tablas de la base de datos. Podr谩 crear registros nuevos y leer, modificar y borrar los registros ya existentes.

## TECNOLOG脥AS UTILIZADAS 馃敤
* react
* redux
* axios
* sass

## REQUISITOS PARA HACERLO FUNCIONAR EN UN EQUIPO LOCAL 馃捇
* Es necesario tener instalado en el equipo **Nodejs**. Si no lo est谩, se puede descargar de su p谩gina oficial https://nodejs.org/
* Clonar el proyecto en nuestro equipo con git bash:
```
$git clone 'url-del-repositorio'
```
* Instalar todas las dependecias con el siguiente comando:
```
npm install
```
* Arrancamos el servidor con el siguiente comando:
```
npm start
```

## EXPLICACI脫N DE LAS DISTINTAS VISTAS 馃搳

* **PANTALLA DE LOGIN:** Desde esta pantalla se accede a la aplicaci贸n. Es necesario el correo electr贸nico y la contrase帽a de un trabajador dado de alta en la base de datos.

![PANTALLA LOGIN](src/img/screenshot/login.jpg)

* **DIFERENTES ROLES:** En funci贸n del rol que tenga asignado el profesional podr谩 ver unas vistas u otras.

* * **admin:** En la vista que ve el profesional con rol de admin se muestran todas las tablas de la base de datos. Adem谩s de poder ver todos los registros, se pueden actualizar o borrar estos registros, y crear registros nuevos.

![PANTALLA ADMIN](src/img/screenshot/admin.jpg)

* * **Administraci贸n:** En la vista que ve el profesional con rol de Administraci贸n se pueden visualizar los datos personales y los datos m茅dicos del usuario, adem谩s de la agenda del resto de profesionales (citas con usuarios). Este perfil de profesional, adem谩s, puede editar estos datos de los usuarios y de la agenda. Por 煤ltimo, este perfil puede dar de alta tanto a usuarios como a profesionales.

![PANTALLA ADMINISTRACION](src/img/screenshot/administracion.jpg)

![PANTALLA CREAR USUARIO](src/img/screenshot/crear_usuario.jpg)

![PANTALLA CREAR PROFESIONAL](src/img/screenshot/crear_profesional.jpg)

* * **Profesional que trata a los usuarios de la cl铆nica (Fisioterapia, Terapia Ocupacional, Neuropsicolog铆a y Logopedia):** En la vista que ven los profesionales con rol que trata a usuarios se pueden visualizar los datos personales y los datos m茅dicos del usuario, las pruebas realizadas por todos los profesionales al usuario, una evolutiva de las pruebas deseadas, revisar y a帽adir seguimientos por escrito a la ficha del usuario, revisar la agenda de ese usuario con todos los profesionales y redactar informes, con posibilidad de exportarlo en formato .pdf. Este perfil de profesional podr谩 crear pruebas del tipo de su profesi贸n, y solo de su tipo.

![PANTALLA PROFESIONAL](src/img/screenshot/profesional.jpg)

* **DIFERENTES PESTA脩AS EN LA PANTALLA PRINCIPAL:** En la aplicaci贸n se realizan las diferentes funciones entrando a cada una de las pesta帽as disponibles.

* * **Historia cl铆nica:** En esta pesta帽a se pueden visualizar los datos personales y sociales del usuario.

![PESTA脩A HISTORIA CLINICA](src/img/screenshot/historia_clinica.jpg)

* **Datos m茅dicos:** En esta pesta帽a se pueden visualizar los datos m茅dicos del usuario, as铆 como las enfermedades, los antecedentes familiares y la medicaci贸n que toma actualmente.

![PESTA脩A DATOS M脡DICOS](src/img/screenshot/datos_medicos.jpg)

* **Fisioterapia:** En esta pesta帽a se pueden visualizar todas las pruebas de fisioterapia. Se pueden ver las pruebas realizadas de cada tipo de prueba, as铆 como lanzar pruebas para guardar los resultados en la base de datos.

![PESTA脩A FISIOTERAPIA](src/img/screenshot/fisioterapia.jpg)

* **Terapia Ocupacional:** En esta pesta帽a se pueden visualizar todas las pruebas de terapia ocupacional. Se pueden ver las pruebas realizadas de cada tipo de prueba, as铆 como lanzar pruebas para guardar los resultados en la base de datos.

![PESTA脩A TERAPIA OCUPACIONAL](src/img/screenshot/terapia_ocupacional.jpg)

* **Neuropsicolog铆a:** En esta pesta帽a se pueden visualizar todas las pruebas de neuropsicolog铆a. Se pueden ver las pruebas realizadas de cada tipo de prueba, as铆 como lanzar pruebas para guardar los resultados en la base de datos.

![PESTA脩A NEUROPSICOLOG脥A](src/img/screenshot/neuropsicologia.jpg)

* **Logopedia:** En esta pesta帽a se pueden visualizar todas las pruebas de logopedia. Se pueden ver las pruebas realizadas de cada tipo de prueba, as铆 como lanzar pruebas para guardar los resultados en la base de datos.

![PESTA脩A LOGOPEDIA](src/img/screenshot/logopedia.jpg)

* **Evolutiva:** En esta pesta帽a se puede visualizar un listado de todos los tipos de pruebas realizadas al usuario. Marcando las pruebas deseadas y pulsando el bot贸n de "MOSTRAR EVOLUTIVA DE PRUEBAS", se muestran las gr谩ficas con las 3 煤ltimas pruebas realizadas de cada tipo de prueba seleccionada.

![PESTA脩A EVOLUTIVA](src/img/screenshot/evolutiva_pruebas.jpg)

![PESTA脩A EVOLUTIVA](src/img/screenshot/evolutiva_graficas.jpg)

* **(EN DESARROLLO) Seguimientos:** En esta pesta帽a se puede visualizar los seguimientos creados por cada profesional, as铆 como crear seguimientos nuevos.

![PESTA脩A SEGUIMIENTOS](src/img/screenshot/seguimientos.jpg)

* **(EN DESARROLLO) Agenda:** En esta pesta帽a se puede visualizar las citas pendientes y pasadas, tanto todas las del usuario como todas las de cada tipo de profesional que tengan con cualquier usuario.

![PESTA脩A AGENDA](src/img/screenshot/agenda.jpg)

* **(EN DESARROLLO) Informe:** En esta pesta帽a se pueden crear informes. Se puede a帽adir motivo de informe, valoraci贸n y resultados de las pruebas que se se seleccionen. Al pulsar el bot贸n "GUARDAR INFORME" se genera un archivo .pdf.

![PESTA脩A INFORME](src/img/screenshot/informe.jpg)

## URL DE DEPLOY 馃挜
https://deploy.dq3nrnn7x4ccs.amplifyapp.com