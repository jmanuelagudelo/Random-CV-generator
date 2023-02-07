const fs = require("fs")

fs.writeFileSync("./.env", `API=${process.env.API}\n`)


/* Deberia de escribirse node ./scripts/create-env.js &&  en el script build del package .json para que esta api sea generada desde este archivo */