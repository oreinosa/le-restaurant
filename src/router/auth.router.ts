import { Request, Response, NextFunction, Router } from "express";
import { User, IUser } from "../models/user.model";
import passport from "../config/passport";
import { Config } from "../config/config";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

export function hashPassword(newUser: IUser): Promise<void> {
  return bcrypt.genSalt(10).then(salt => {
    return bcrypt.hash(newUser.password, salt).then(hash => {
      newUser.password = hash;
    });
  });
}

export function comparePassword(
  candidatePassword: string,
  hash: string
): Promise<any> {
  return bcrypt.compare(candidatePassword, hash);
}

class AuthRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public login(req: Request, res: Response): void {
    const { email, password } = req.body;

    // verify if email and password were sent
    if (email && password) {
      // if body is correct
      const query = { email }; // query to search by email
      User.findOne(query) // look for user with query
        .then((user: IUser) => {
          if (user) {
            // if user is found
            comparePassword(password, user.password) // check if DB password hash matches sent password string
              .then((flag: boolean) => {
                if (flag) {
                  // if they match
                  user.password = undefined; // remove password hash from sent data
                  const token = jwt.sign({ data: user }, Config.secret, {
                    expiresIn: 604800 // 1 week
                  });
                  // return user data and generated token
                  res.status(200).json({ user, token });
                } else {
                  // if there's no match
                  res
                    .status(401)
                    .send("Email address or password are incorrect.");
                }
              })
              .catch((error: any) => {
                res.status(500).send(error);
              });
          } else {
            res.status(401).send("Email address or password are incorrect.");
          }
        })
        .catch((error: any) => {
          res.status(500).send(error);
        });
    } else {
      res.status(400).send("Missing fields");
    }
  }

  public register(req: Request, res: Response): void {
    const { name, username, email, password } = req.body; // get individual fields from request
    // check if all fields exist
    if (name && username && email && password) {
      // create User model
      const newUser = new User({
        name,
        username,
        email,
        password
      });
      hashPassword(newUser) // hash user's password before saving
        .then(() => {
          // once password has been hashed
          return User.create(newUser)
            .then(() => {
              // user was added successfully
              newUser.password = undefined;
              const data = newUser;
              res.status(201).json({ data });
            })
            .catch((_error: any) => {
              // error when newUser required properties may be missing
              let error: string = " already in use"; // start message for "already in use"
              let message: string = _error.message; // get error message which will contain duplicate property
              if (message.indexOf("username") >= 0) {
                // if duplicate property is username
                error = "Username" + error;
              } else if (message.indexOf("email") >= 0) {
                // if duplicate property is email
                error = "Email" + error;
              }
              res.status(401).send(error);
            });
        })
        .catch(error => res.status(500).send(error)); // if there's a problem hashing password
    } else {
      // if there are missing fields
      res.status(400).send("Missing fields");
    }
  }

  public profile(req: Request, res: Response): void {
    const data = req.user;
    res.status(200).json({ data });
  }

  // set up our routes
  public routes() {
    const requireLogin = passport.authenticate("auth", { session: false });

    this.router.post("/login", this.login);
    this.router.post("/register", this.register);
    this.router.post("/profile", requireLogin, this.profile);
  }
}

const authRoutes = new AuthRouter();
authRoutes.routes();

export default authRoutes.router;
