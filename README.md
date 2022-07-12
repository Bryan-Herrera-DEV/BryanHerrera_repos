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
            "name": "Entidad Bancaria",
            "status": "1"
        }
    ]
  }
```
POST: localhost:3000/organization/create
```json
 // Ejemplo Body De la peticion:
  {
    "name": "Entidad Bancaria",
    "status": "1"
  }
  
 // Ejemplo respuesta
  {
    "status": "success",
    "message": "Organización creada con éxito",
    "data": {
        "name": "Entidad Bancaria",
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
    "name": "Entidad Bancaria Actualizado",
    "status": "1"
  }
  
// Ejemplo respuesta
  {
    "status": "success",
    "message": "Organización actualizada con exito",
    "data": {
        "name": "Entidad Bancaria Actualizado",
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
                "name": "Entidad Bancaria",
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
GET: localhost:3000/repository/reporte/1
```json
 // Ejemplo respuesta
  {"csv":{"type":"Buffer","data":[105,100,44,110,97,109,101,44,116,114,105,98,101,44,111,114,103,97,110,105,122,97,116,105,111,110,44,99,111,118,101,114,97,103,101,44,99,111,100,101,83,109,101,108,108,115,44,98,117,103,115,44,118,117,108,110,101,114,97,98,105,108,105,116,105,101,115,44,104,111,116,115,112,111,116,115,44,118,101,114,105,102,105,99,97,116,105,111,110,83,116,97,116,101,44,115,116,97,116,101,13,10,49,44,99,100,45,99,111,109,109,111,110,45,117,116,105,108,115,44,67,101,110,116,114,111,32,68,105,103,105,116,97,108,44,66,97,110,99,111,32,80,105,99,104,105,110,99,104,97,44,51,53,37,44,49,44,48,44,48,44,48,44,86,101,114,105,102,105,99,97,100,111,44,72,97,98,105,108,105,116,97,100,111,13,10,50,44,99,100,45,99,111,109,109,111,110,45,116,101,120,116,44,67,101,110,116,114,111,32,68,105,103,105,116,97,108,44,66,97,110,99,111,32,80,105,99,104,105,110,99,104,97,44,55,53,37,44,49,44,48,44,50,44,48,44,69,110,32,101,115,112,101,114,97,44,65,114,99,104,105,118,97,100,111]}}
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
---
### Metrics
GET: localhost:3000/metrics
```json
 // Ejemplo respuesta
  {
    "status": "success",
    "message": "Metricas obtenidas con éxito",
    "data": [
        {
            "id_repository": 1,
            "coverage": 35,
            "bugs": "0",
            "vulnerabilities": "0",
            "hotspot": "0",
            "code_smells": "1"
        },
        {
            "id_repository": 2,
            "coverage": 75,
            "bugs": "0",
            "vulnerabilities": "2",
            "hotspot": "0",
            "code_smells": "1"
        }
    ]
}
```
POST: localhost:3000/repository
```json
 // Ejemplo Body De la peticion:
  {
    "id_repository": 1,
    "coverage": 35,
    "bugs": "0",
    "vulnerabilities": "0",
    "hotspot": "0",
    "code_smells": "1"
  }
  
 // Ejemplo respuesta
  {
    "status": "success",
    "message": "Metrica creada con éxito",
    "data": {
        "id_repository": 1,
        "coverage": 35,
        "bugs": "0",
        "vulnerabilities": "0",
        "hotspot": "0",
        "code_smells": "1"
    }
  }
```
