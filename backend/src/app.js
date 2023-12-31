import express from 'express';
import { resolve } from 'path';
import cors from 'cors';
import helmet from 'helmet';
import homeRoutes from './routes/home';
import userRoutes from './routes/user';
import tokenRoutes from './routes/token';
import studentRoutes from './routes/student';
import photoRoutes from './routes/photo';
import './database';

const corsOptions = {
  origin(origin, callback) {
    callback(null, true);
  },
};
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
    this.app.use('/static/', express.static(resolve(__dirname, '..', 'uploads', 'static')));
    // this.app.use(express.static(`${__dirname}/uploads`));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/students/', studentRoutes);
    this.app.use('/photos/', photoRoutes);
    this.app.use('/images', express.static(resolve(__dirname, 'uploads/images')));
  }
}

export default new App().app;
