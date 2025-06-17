import express from "express";
import cluster from 'cluster'
import os from 'os'
const app = express();
const PORT = process.env.PORT || 3001;
const cpuNum = os.cpus().length
if (cluster.isPrimary) {
  console.log(`Master process ${process.pid} is running`);

  for (let i = 0; i < 1; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker process ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  const app = express();
  app.get('/',(req,res)=>{
    return res.sendStatus(200)
  })
  const server = app.listen(3000, () => {
    console.log(`Worker process ${process.pid} is listening on port 3000`);
  });
}
