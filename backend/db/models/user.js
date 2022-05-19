'use strict';
const bcrypt = require('bcryptjs');
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    toSafeObject() {
      //this = context will be the User instance
      const { id, email } = this;
      return { id, email };
    }
    validatePassword(password) {
      //compare input password hashed to the user instance hashed password
      return bcrypt.compareSync(password, this.password.toString());
    }
    //static method that is called on the instance of User. User1.getCurrentUserById(id) will return the scope of current user found by Id
    static getCurrentUserById(id) {
      return User.scope("currentUser").findByPk(id);
    }

    // checks User.scope, if username or email is same as input.
    static async login({ credential, password }) {
      //importing Op object which are the operators
      const { Op } = require('sequelize');
      const user = await User.scope('loginUser').findOne({
        where: {
          //[Op.or] = checking is username OR email is equale to input credential
          [Op.or]: {
            email: credential
          }
        }
      });
      //is it exists and password is the same, then it returns the User.Scope by user Id
      if (user && user.validatePassword(password)) {
        return await User.scope('currentUser').findByPk(user.id);
      }

    }
    static async signup({ firstName, lastName, email, password }) {
      const hashedPassword = bcrypt.hashSync(password);
      const user = await User.create({
        firstName,
        lastName,
        email,
        hashedPassword
      });
      return await User.scope('currentUser').findByPk(user.id);
    }


    static associate(models) {
      User.hasMany(models.Booking,
        { foreignKey: 'userId' })

      User.hasMany(models.Review,
        { foreignKey: 'userId' })

      User.hasMany(models.Spot,
        { foreignKey: 'ownerId' })
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING.BINARY,
      allowNull: false
    },
    isHost: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    defaultScope: {
      attributes: {
        exclude: ["password", "email", "createdAt", "updatedAt"]
      }
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ["password"] }
      },
      loginUser: {
        attributes: {}
      }
    }
  });
  return User;
};
