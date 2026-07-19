import "dotenv/config";
import { web } from "./config/web.mjs";

web.listen(4000, () => {
    console.log("Server is running on port 4000");
});