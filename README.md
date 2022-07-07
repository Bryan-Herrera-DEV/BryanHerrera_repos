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
