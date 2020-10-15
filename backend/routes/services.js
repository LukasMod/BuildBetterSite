const express = require('express');

const servicesController = require('../controllers/services');

const router = express.Router();

router.get('/:id', servicesController.getService);
router.get('/', servicesController.getServices);
router.post('/', servicesController.postService);
router.put('/', servicesController.putService);
router.delete('/:id', servicesController.deleteService);
router.use((request, response) => response.status(404).end());

module.exports = router;