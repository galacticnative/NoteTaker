// const router = require('express').Router();
// //const { filterByQuery, findById } = require('../../lib/db');
// const { db } = require('../../data/db.json');

// router.get('/db', (req, res) => {
//     let results = db;
//     if (req.query) {
//       results = filterByQuery(req.query, results);
//     }
//     res.json(results);
// });
  
// // router.get('/database/:id', (req, res) => {
// //     const result = findById(req.params.id, database);
// //     if (result) {
// //       res.json(result);
// //     } else {
// //       res.send(404);
// //     }
// // });
  
// router.post('/db', (req, res) => {
//     // set id based on what the next index of the array will be
//     req.body.id = db.length.toString();

//     if (!validateDatabase(req.body)) {
//         res.status(400).send('The data is not properly formatted.');
//     } else {
//         const db = createNewDatabase(req.body, database);
//         res.json(db);
//     }
// });

// module.exports  = router;