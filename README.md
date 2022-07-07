# Prueba tecnica BACKEND NODE JS

## Ejercicio 1: Servicio simulado (Mock)
- Url servicio mock
Se creo usando el servio de mockable.io
```
https://demo4316745.mockable.io/repository/state
```
## Ejercicio 2: Administración de organizaciones
Rutas de la API de  para obtener, crear, actualizar y borrar organizaciones.
- GET: localhost:3000/organization
```shell
Respuesta esperada:
  {
    "status": "success",
    "message": "Organizaciones obtenidas con éxito",
    "data": [
        {
            "id_organization": 2,
            "name": "Banco Pichincha",
            "status": "1"
        }
    ]
  }
```
- POST: localhost:3000/organization/create
```shell
  Body De la peticion:
  {
    "name": "Banco Pichincha",
    "status": "1"
  }
  Respuesta Esperada:
  {
    "status": "success",
    "message": "Organización creada con éxito",
    "data": {
        "name": "Banco Pichincha",
        "status": "1",
        "id_organization": 2
    }
  }
```
- PUT: localhost:3000/organization/update
```shell
 Body De la peticion:
  {
    "id_organization": 2,
    "name": "Banco Pichincha Actualizado
    "status": "1"
  }
  Respuesta Esperada:
  {
    "status": "success",
    "message": "Organización actualizada con exito",
    "data": {
        "name": "Banco Pichincha Actualizado"
        "status": "1",
        "id_organization": 2
    }
  }
```
- DELETE: localhost:3000/organization/delete
```shell  
  {
    "id_organization": 2
  }
  Respuesta Esperada:
  {
    "status": "success",
    "message": "Organización borrada con éxito",
    "data": {}
  }
```
