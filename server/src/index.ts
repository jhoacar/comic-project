import server from './bootstrap/server';
import dynamicImport from './bootstrap/database';

const port = process.env.PORT || 4000;

server.listen(port, async () => {
    console.log(`Server listening on port ${port}`);
    const { default: initalization } = await dynamicImport;
    initalization();
})