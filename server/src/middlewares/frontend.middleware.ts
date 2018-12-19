import { Injectable, MiddlewareFunction, NestMiddleware } from "@nestjs/common";
import * as path from "path";
import { ROUTE_PREFIX } from "../routes";

const allowedExt = [
  ".js",
  ".ico",
  ".css",
  ".png",
  ".jpg",
  ".woff2",
  ".woff",
  ".ttf",
  ".svg"
];

const resolvePath = (file: string) => path.resolve(path.join(__dirname, "../../") + `/public/${file}`);

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      // CORSを反応させないようにヘッダーをつける
      let allowedOrigins = ["http://localhost:4200"];
      if (allowedOrigins.indexOf(req.header("Origin")) > -1) {
        res.header("Access-Control-Allow-Origin", req.header("Origin"));
        res.header("Access-Control-Allow-Headers", "content-type");
        res.header("Access-Control-Allow-Methods", "GET");
      }

      // URLを拾ってくる
      const url = req.originalUrl;
      if (url.indexOf(ROUTE_PREFIX) === 1) {
        // it starts with /api --> continue with execution
        next();
      } else if (allowedExt.filter(ext => url.indexOf(ext) > 0).length > 0) {
        // it has a file extension --> resolve the file
        res.sendFile(resolvePath(url));
      } else {
        // in all other cases, redirect to the index.html!
        res.sendFile(resolvePath("index.html"));
      }
    };
  }
}
