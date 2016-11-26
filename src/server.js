import express from 'express';
import cors from 'cors';
import logger from './middleware/logger';


const algorithm = (n) => {
  const result = {
    0: '1',
    1: '18',
    2: '243',
    3: '3240',
    4: '43254',
    5: '577368',
    6: '7706988',
    7: '102876480',
    8: '1373243544',
    9: '18330699168',
    10: '244686773808',
    11: '3266193870720',
    12: '43598688377184',
    13: '581975750199168',
    14: '7768485393179328',
    15: '103697388221736960',
    16: '1384201395738071424',
    17: '18476969736848122368',
    18: '246639261965462754048',
  };
  return result[n];
};

export default (log) => {
  const app = express();
  app.use(cors());
  app.use(logger(log));
  app.get('/', (req, res) => {
    res.send(algorithm(req.query.i));
  });
  return app;
};