const cors = require("cors");

application.use(
  cors({
    origin: "http://localhost:5173",
  })
);
