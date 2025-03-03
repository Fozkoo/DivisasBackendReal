import { createApp }  from "./app.js";
import { DivisaModel } from "./models/mysql/divisaModel.js";

createApp({ divisaModel: DivisaModel })