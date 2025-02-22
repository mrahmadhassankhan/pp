import { NextFunction, Request, Response } from "express";

export const Logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.session.destroy(function (e) {
    req.logOut(function (error) {
      if (error) {
        return next(error);
      }
      res.redirect("/");
    });
  });
};
