import Express from 'express';

import shortLinkRoutes from '../presentation/http/routes/short-link.route';
import shortLinkRouterRedirect from '../presentation/http/routes/redirect-link.route';
const server = Express();

server.use(Express.json());
server.use('/', shortLinkRouterRedirect);
server.use('/api', shortLinkRoutes);

export { server };