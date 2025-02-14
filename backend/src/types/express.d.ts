declare global {
  namespace Express {
    interface User {
      displayName: string;
    }

    interface Request {
      user?: User;
    }
  }
}

export {};
