import { Request, Response } from "express";

module.exports = (): (req: Request, res: Response, next: () => void) => void => {
  return (req: Request, res: Response, next: () => void): void => {
    const { url } = req;
    if (!getPublicURLS().includes(url)) {
      const token = req.header("Authorization");
      if (!token) {
        res.status(500);
        res.send("Le token est manquant");
        return;
      }
    }
    next();
  };
};

const getPublicURLS = (): string[] => {
  const API_URL = "/api";
  const API_USER = `${API_URL}/.user`;
  const API_USER_LOGGED_IN = `${API_USER}/login`;

  const urls = [
    API_URL,
    API_USER,
    API_USER_LOGGED_IN,
  ] as string[];

  return urls;
};

export default module.exports;
