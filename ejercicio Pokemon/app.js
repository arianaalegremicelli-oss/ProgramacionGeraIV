import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

/**
 * Ruta: GET /pokemon/:nombre
 * Entrada: req.params.nombre (ejemplo: 'pikachu', 'bulbasaur', '25')
 * Respuesta: JSON con nombre, id, tipos (arreglo plano) y experienciaBase
 */
app.get('/pokemon/:nombre', async (req, res) => {
  const { nombre } = req.params;

  try {
    const apiRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase().trim()}`);

    if (!apiRes.ok) {
      if (apiRes.status === 404) {
        return res.status(404).json({
          error: `Pokémon '${nombre}' no encontrado.`
        });
      }
      return res.status(apiRes.status).json({
        error: 'Error al consumir la PokéAPI'
      });
    }

    const data = await apiRes.json();

    // Transformación según los requisitos solicitados:
    const pokemonFormateado = {
      nombre: data.name,
      id: data.id,
      tipos: data.types.map((item) => item.type.name),
      experienciaBase: data.base_experience
    };

    return res.json(pokemonFormateado);

  } catch (error) {
    console.error('Error interno al consumir PokéAPI:', error);
    return res.status(500).json({
      error: 'Ocurrió un error interno en el servidor.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor PokéAPI iniciado en http://localhost:${PORT}`);
  console.log(`📌 Prueba haciendo una petición GET a: http://localhost:${PORT}/pokemon/pikachu`);
});

export default app;
