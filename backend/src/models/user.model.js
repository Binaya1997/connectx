const pool = require("../database");

const getUserByEmail = async (email) => {
  const query = `
    SELECT *
    FROM users
    WHERE email = $1
  `;

  const result = await pool.query(
    query,
    [email]
  );

  return result.rows[0];
};

const getUserById = async (id) => {

  const query = `
    SELECT
      id,
      name,
      email,
      created_at
    FROM users
    WHERE id = $1
  `;

  const result = await pool.query(
    query,
    [id]
  );

  return result.rows[0];

};

const createUser = async ({ name, email, password }) => {
  const query = `
    INSERT INTO users(name, email, password)
    VALUES($1, $2, $3)
    RETURNING id, name, email, created_at
  `;

  const result = await pool.query(
    query,
    [name, email, password]
  );

  return result.rows[0];
};


const updateUserProfile =
  async (id, data) => {

    const {
      username,
      bio,
    } = data;

    const query = `
      UPDATE users
      SET
        username = $1,
        bio = $2,
        updated_at = NOW()
      WHERE id = $3
      RETURNING
        id,
        name,
        email,
        username,
        bio,
        avatar_url,
        created_at,
        updated_at
    `;

    const result =
      await pool.query(
        query,
        [
          username,
          bio,
          id,
        ]
      );

    return result.rows[0];

  };


module.exports = {
  createUser,
  getUserByEmail,
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
  updateUserProfile,
};
