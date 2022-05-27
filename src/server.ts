import app from './app';
import { PORT, swaggerOptions } from './config';

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}, `);
  console.log(`Swagger UI: http://localhost:${PORT}${swaggerOptions.swaggerUIPath}`);
  console.log(`API doc: http://localhost:${PORT}${swaggerOptions.apiDocsPath}`);
});
