import router, { Request, Response } from 'express';
// import apiRoutes from './api';

router.Router();

// router.use('/api', apiRoutes);

router.use((req: Request, res: Response) => {
  res.send("<h1>Wrong Route!</h1>")
});

export default router;