import express from 'express';

var router = express.Router();

router.get('/areas', (req, res) => {
  res.status(200).json([
    'Management',
    'Technology',
    'Tools',
    'Testing',
    'Bussiness',
    'Communication'])
});

export default router;
