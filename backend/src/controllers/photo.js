import multer from 'multer';
import fs from 'fs';
import multerConfig from '../config/multer';
import Photos from '../models/Photos';

const upload = multer(multerConfig).single('photo');

class Photo {
  store(req, res) {
    return upload(req, res, async (e) => {
      try {
        if(e) {
          return res.status(400).json({
            errors: [e.code],
          });
        }

        const { originalname, filename } = req.file;
        const { student_id } = req.body;
        const photo = await Photos.create({ originalname, filename, student_id });

        return res.json(photo);
      } catch(erro) {
        return res.status(400).json({
          errors: ["The student doesn't exists!"],
        });
      }
    });
  }

  async remove(req, res) {
    try {
      const { id } = req.params;
      const photo = await Photos.findByPk(id);

      if(!photo) {
        return res.status(400).json("The photo doesn't exists!");
      }

      //   await Photos.destroy({
      //     where: {
      //       id,
      //     },
      //   });

      fs.unlink(`./uploads/images/${photo.filename}`, (e) => console.log(e));

      return res.json(`The photo with ID ${id} was deleted!`);
    } catch(e) {
      return res.status(400).json(e);
    }
  }
}

export default new Photo();
