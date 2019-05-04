import express from 'express';
import HomeService from './model/HomeService';
import { Contact } from '../src/components/home-components';
import bodyParser from 'body-parser';
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// GET REQUESTS
router.get('/', (req, res) => res.send(HomeService.getSSRHomeView()) );


//POST REQUESTS
router.post('/send-contact-form', (req, res) => HomeService.handleContactForm(req.body) );

export default router;
