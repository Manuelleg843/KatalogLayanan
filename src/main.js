import { web } from "./application/web.js";
import { logger } from "./application/logging.js";

web.listen(3000, () => {
    logger.info("Server started on http://localhost:3000");
});