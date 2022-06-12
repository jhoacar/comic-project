import server from './boot/server';
import dynamicImport from './boot/database';

const port = process.env.PORT || 4000;

server.listen(port, async () => {
    console.log(`Server listening on http://localhost:${port}`);
    const { default: initalization } = await dynamicImport;
    initalization();
})