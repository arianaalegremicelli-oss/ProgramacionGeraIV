# Ejercicio: Consumo de PokéAPI en Express.js

Este proyecto resuelve la consigna de consumir la API pública de Pokémon ([PokéAPI](https://pokeapi.co/)) mediante un servidor Backend en Express.js.

## 📌 ¿De qué trata esta actividad?
La actividad consiste en construir una **API REST intermedia (o backend proxy)**. 
Cuando un cliente (navegador, Postman, Frontend, etc.) solicita información de un Pokémon por la URL de tu servidor (ej. `/pokemon/pikachu`), tu servidor:
1. Recibe el parámetro `:nombre` de la ruta (`req.params.nombre`).
2. Realiza una petición `fetch` a la PokéAPI original: `https://pokeapi.co/api/v2/pokemon/{nombre}`.
3. Extrae la información devuelta y la **filtra/simplifica** para responder **únicamente** con los campos pedidos:
   - `nombre`
   - `id`
   - `tipos` (un arreglo plano de cadenas de texto, ej: `["grass", "poison"]`)
   - `experienciaBase` (`base_experience`)

---

## 🚀 Cómo ejecutar el proyecto

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar el servidor**:
   - Para modo producción:
     ```bash
     npm start
     ```
   - Para modo desarrollo (con auto-reload por nodemon):
     ```bash
     npm run dev
     ```

---

## 🧪 Ejemplos de prueba

### 1. Petición para Pikachu:
**URL**: `GET http://localhost:3000/pokemon/pikachu`

**Respuesta recibida (JSON)**:
```json
{
  "nombre": "pikachu",
  "id": 25,
  "tipos": [
    "electric"
  ],
  "experienciaBase": 112
}
```

### 2. Petición para Bulbasaur:
**URL**: `GET http://localhost:3000/pokemon/bulbasaur`

**Respuesta recibida (JSON)**:
```json
{
  "nombre": "bulbasaur",
  "id": 1,
  "tipos": [
    "grass",
    "poison"
  ],
  "experienciaBase": 64
}
```

### 3. Petición para un Pokémon inexistente:
**URL**: `GET http://localhost:3000/pokemon/pokemonfalso`

**Respuesta recibida (HTTP Status 404)**:
```json
{
  "error": "Pokémon 'pokemonfalso' no encontrado."
}
```
