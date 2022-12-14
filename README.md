## Directory:
```text
project
└───src
│   │   app.vue    // 主页面
│   │   main.js    // 主入口
│   │
│   |____assets    // css、image、svg等资源
│   |   |____style   // css资源
│   |   |____image   // image图标库
|   |
|   |____components    // 组件
│   |   |____common    // 公共组件
│   |   |____entity    // entity页面组件
│   |   |____about     // about页面组件
│   |   |____xxx       // xxx页面组件
|   |
|   |____pages     // UI层
|   |   |____entity
|   |   |    |  list.vue      // 列表页
|   |   |    |  create.vue    // 新增页
|   |   |    |  edit.vue      // 修改页
|   |   | main.vue
|   |
|   |____store     // vuex数据
|   |   | index.js
|   |
|   |____utils     // 工具层
|   |   | config.js// 配置文件，包括常量配置
|   |   | xxx.js   // 工具函数
|
└───public         // 公用文件，不经过webpack处理
│   │   index.html
|   |   robot.txt  // 爬虫设定
│   vue.config.js  // vue-cli2主配置
│   package.json   // npm配置
│   README.md      // 项目说明
 
```

## Dockerfile build
需要安装docker
### image build
请先 npm run build
```shell
docker build -f Dockerfile -t my-frontend:v1.0 .
```
### container run
```shell
docker run -d -p 80:80 --name my-frontend my-frontend:v1.0
```
