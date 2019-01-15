import express from 'express';

var router = express.Router();

router.get('/users/me', (req, res) => {
  res.status(200).json({
    id: 3,
    name: 'Maxi',
    stats: [
      {
        name: 'Management',
        value: 140,
        max: 150
      },
      {
        name: 'Technology',
        value: 100,
        max: 150
      },
      {
        name: 'Tools',
        value: 50,
        max: 150
      },
      {
        name: 'Testing',
        value: 10,
        max: 150
      },
      {
        name: 'Bussiness',
        value: 60,
        max: 150
      },
      {
        name: 'Communication',
        value: 70,
        max: 150
      }
    ]
  })
});

export default router;
