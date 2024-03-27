import { Router, Request, Response } from "express";
import Product from "../../models/Product";
import sequelize from "../../config/connection";

const router = Router();
router.get('/', async (req: Request, res: Response) => {
    try {
        const allProducts: Product[] = await Product.findAll();
        res.status(200).json(allProducts);
    } catch (err: any) {
      res.status(500).json(err);
    }
});

// router.get('/:id', async (req, res) => {
//     try {
//       const oneCategory = sequelize.query(`SELECT * FROM blog WHERE id = '${req.params.id}';`)
//         .then(results => {
//           res.status(200).json(results)
//         })
  
//       if (!oneCategory) {
//         res.status(404).json({ message: "Sorry, we didn't find an entry with that id" });
//         return;
//       }
      
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

//   router.post('/', async (req, res) => {
//     try {
//       const newBlog = await Blog.create({
//         post_title: req.body.post_title,
//         content: req.body.content,
//         creater_name: req.body.creater_name,
//       });
//       res.status(200).json(newBlog);
//     } catch (err) {
//       res.status(400).json(err);
//     }
// });

export default router;
