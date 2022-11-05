import Auth from "./auth.js";
import User from './user.js';
import Challenge from './challenge.js';

User.hasMany(Challenge);
Challenge.belongsTo(User);

User.sync({alter: true});
Auth.sync();
Challenge.sync({alter: true});

export { Auth, User, Challenge };