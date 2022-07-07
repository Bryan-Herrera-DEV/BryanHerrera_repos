# Prueba tecnica BACKEND NODE JS

## Servicio simulado (Mock)
- Url servicio mock
Se creo usando el servio de mockable.io Para la resolucion del 
```
https://demo4316745.mockable.io/repository/state
```
## Endpoints 

### Organization
GET: localhost:3000/organization
```json
 // Ejemplo respuesta
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
POST: localhost:3000/organization/create
```json
 // Ejemplo Body De la peticion:
  {
    "name": "Banco Pichincha",
    "status": "1"
  }
  
 // Ejemplo respuesta
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
PUT: localhost:3000/organization/update
```json
// Ejemplo Body De la peticion:
  {
    "id_organization": 2,
    "name": "Banco Pichincha Actualizado",
    "status": "1"
  }
  
// Ejemplo respuesta
  {
    "status": "success",
    "message": "Organización actualizada con exito",
    "data": {
        "name": "Banco Pichincha Actualizado",
        "status": "1",
        "id_organization": 2
    }
  }
```
DELETE: localhost:3000/organization/delete
```json  
// Ejemplo Body De la peticion:
  {
    "id_organization": 2
  }
  
// Ejemplo respuesta
  {
    "status": "success",
    "message": "Organización borrada con éxito",
    "data": {}
  }
```
---
### Tribe
GET: localhost:3000/tribe
```json
 // Ejemplo respuesta
  {
    "status": "success",
    "message": "Tribus obtenidas con éxito",
    "data": [
        {
            "id_tribe": 1,
            "name": "Centro Digital",
            "status": "1",
            "id_organization": {
                "id_organization": 2,
                "name": "Banco Pichincha",
                "status": "1"
            }
        }
    ]
  }
```
POST: localhost:3000/tribe/create
```json
 // Ejemplo Body De la peticion:
  {
    "id_organization": 1,
    "name": "Centro Digital",
    "status": "1"
  }
  
 // Ejemplo respuesta
  {
    "status": "success",
    "message": "Tribu creada con éxito",
    "data": {
        "name": "Centro Digital",
        "status": "1",
        "id_organization": "2",
        "id_tribe": 1
    }
  }
```
---
### Repository
GET: localhost:3000/repository
```json
 // Ejemplo respuesta
  {
    "status": "success",
    "message": "Repositorios obtenidas con éxito",
    "data": [
        {
            "id_repository": 1,
            "name": "cd-common-utils",
            "state": "E",
            "create_time": "2022-07-07T16:57:40.536Z",
            "status": "A",
            "metrics": null
        },
        {
            "id_repository": 2,
            "name": "cd-common-text",
            "state": "A",
            "create_time": "2022-07-07T17:01:33.445Z",
            "status": "i",
            "metrics": null
        }
    ]
  }
```
POST: localhost:3000/repository
```json
 // Ejemplo Body De la peticion:
  {
    "id_tribe": 1,
    "name": "cd-common-text",
    "state": "A",
    "status": "i"
  }
  
 // Ejemplo respuesta
  {
    "status": "success",
    "message": "Repositorio creada con éxito",
    "data": {
        "id_tribe": "1",
        "name": "cd-common-text",
        "state": "A",
        "create_time": "2022-07-07T17:01:33.445Z",
        "status": "i",
        "id_repository": 2
    }
  }
```
