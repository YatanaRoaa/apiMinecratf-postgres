
const { Router } = require('express');
const ctr = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('Welcome to Minecraft API'));
router.post('/blocks', ctr.createBlock);
router.get('/blocks', ctr.getAllBlocks);
router.put('/blocks/:id', ctr.updateBlock);
router.patch('/blocks/:id', ctr.updateBlock);
router.delete('/blocks/:id', ctr.deleteBlock);
module.exports = router;
