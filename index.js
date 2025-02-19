import app from "./src/app.js";
import { PORT } from "./src/config.js";
import sequelize from "./src/models/config.js";

import Food from "./src/models/food-model.js";
import Sale from "./src/models/sale-model.js";
import SaleDetail from "./src/models/sale-detail-model.js";

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    // await sequelize.sync({force: true}); // Sync all models
    await Food.sync({ force: true });
    await Sale.sync({ force: true });
    await SaleDetail.sync({ force: true });
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();