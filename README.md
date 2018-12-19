# MAN2Stack

## Japanese Readme:
### 特色
    MongoDB + Angular6 + Node.js + Nest.jsで作るMAN2スタックウェブアプリのスケルトンです。
    (現状ではMongoDBを動かす環境を追加していないので、後で追加します)
    
### よく使用するコマンド一覧
1.Nestサーバをビルド&ブート&ng serveコマンドの実行。

    npm run start
    
2.ng serveコマンドを単体で実行する。

    npm run start:client
    
3.Expressサーバを単体でブートする。
    
    npm run start:server
    
4.ExpressサーバとAngularをビルドしてdistフォルダにアウトプットする。
    
    npm run build
  
5.Angularだけをビルドしてdistフォルダにアウトプットする。
    
    npm run build:client    
      
6.Nestサーバだけをビルドしてdistフォルダにアウトプットする。(Angularのビルドは長いので、サーバだけビルドしたい時はこっちを使うと効率的)
     
    npm run build:server
    
7.NestサーバとAngularをビルド後、Nestサーバをブートする。(localhost:3000でアクセス可能)
    
    npm run buildRun
  
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
