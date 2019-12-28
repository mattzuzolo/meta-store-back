const Koa = require('koa');
const KoaRouter = require('@koa/router');
const json = require('koa-json');

const PORT = 3000;
const app = new Koa();
const router = new KoaRouter();

// Pretty print response middleware
// Possibly want to switch off in the future (see documentation for more info)
app.use(json({ pretty: true, param: 'pretty' }));

router.get('/test', ctx => {
  ctx.body = { someKey: 'lol this is a route!' };
});

router.get('/', ctx => {
  ctx.body = { welcome: 'to the root' };
});

// Router middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}...`));
