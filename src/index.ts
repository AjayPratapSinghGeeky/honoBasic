import { Hono } from 'hono'

const app = new Hono()

app.use(async (c, next) => {
  if (c.req.header("Authorization")) {
    // Do validation
    console.log("in the middleware");
    await next()
  } else {
    return c.text("You dont have acces");
  }
})

app.get('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app
