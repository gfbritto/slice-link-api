import { ShortLinkController } from './../controllers/short-link.controller';
import { Router } from 'express';
import { container } from 'tsyringe';

const router = Router();

router.post('/shortLink', (req, res, next) => container.resolve(ShortLinkController).create(req, res, next));
router.get('/shortLink', (req, res, next) => container.resolve(ShortLinkController).getAll(req, res, next));

export default router;