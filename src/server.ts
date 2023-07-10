const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
export default app
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
     console.log(`Server is running in http://localhost:${PORT}`)
})