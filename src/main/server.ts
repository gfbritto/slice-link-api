import Express from 'express';

import shortLinkRoutes from '../presentation/http/routes/short-link.route';

const server = Express();

server.use(Express.json());
server.use('/api', shortLinkRoutes);

export { server };