import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const { email } = req.body;

      if (await User.findOne({ where: { email } }))
        return res.status(400).json({ error: 'Email user exists' });

      const user = await User.create(req.body);

      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
}

export default new UserController();
