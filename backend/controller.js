import express from 'express';
import HomeService from './model/HomeService';
import bodyParser from 'body-parser';
import { ssrRoutes } from './routes';
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// GET REQUESTS
router.get(ssrRoutes, (req, res) => res.send(HomeService.getSSRHomeView(req)) );


//POST REQUESTS
router.post('/send-contact-form', (req, res) => HomeService.handleContactForm(req.body) );

export default router;
