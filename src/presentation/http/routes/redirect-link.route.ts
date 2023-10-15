import { Router } from 'express';
import { container } from 'tsyringe';
import { RedirectLinkController } from '../controllers/redirect-link.controller';

const shortLinkRouterRedirect = Router();

shortLinkRouterRedirect.get('/:token', (req, res, next) => container.resolve(RedirectLinkController).redirect(req, res, next));

export default shortLinkRouterRedirect;