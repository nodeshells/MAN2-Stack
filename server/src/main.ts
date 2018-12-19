import { NestFactory } from "@nestjs/core";
import { renderFile } from "ejs";
import { AppModule } from "./app.module";
import { join } from "path";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.engine("html", renderFile)
    .setBaseViewsDir(join(__dirname, "../views"))
    .useStaticAssets(join(__dirname, "/../public"), {
      index: false,
      redirect: false
    });

  await app.listen(3000);
}

bootstrap();
