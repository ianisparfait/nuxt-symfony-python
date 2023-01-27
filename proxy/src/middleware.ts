import { Request, Response } from "express";
import { urlsAcceptedWithoutConnection } from "./endpoints";

module.exports = (): (req: Request, res: Response, next: () => void) => void => {
  return function (req: Request, res: Response, next: () => void) {
    const { url } = req;
    if (!urlsAcceptedWithoutConnection.includes(url)) {
      const token = req.header("Authorization");
      if (!token) {
        res.status(500);
        res.send("Token missing");
        return;
      }
    }
    next();
  };
};

export default module.exports;
