import Sequelize, { Model } from 'sequelize';
import dotenv from 'dotenv';
import Students from './Students';

dotenv.config();

export default class Photos extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'This file name can not be null',
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'This file name can not be null',
            },
          },
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://${process.env.HOST}:${process.env.PORT}/images/${this.getDataValue('filename')}`;
          },
        },
      },
      {
        sequelize,
        tableName: 'photos',
      },
    );
    return this;
  }

  static associate() {
    this.belongsTo(Students, { foreignKey: 'student_id' });
  }
}
