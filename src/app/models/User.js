import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', user => {
      if (user.password) {
        user.password = bcrypt.hashSync(user.password);
      }
    });

    return this;
  }
}

export default User;
