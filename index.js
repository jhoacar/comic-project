const app = require("./server");
const handleStartServer = require('./server/helpers/handleStartServer');

const PORT = process.env.PORT || 4001;

app.listen(PORT, handleStartServer);