import express from 'express';
import bodyParser from 'body-parser';

const articlesInfo = {
  'learn-react': {
    votes: 0
  },
  'learn-node': {
    votes: 0
  },
  'my-thoughts-on-resumes': {
    votes: 0
  }
};

const app = express();
app.use(bodyParser.json());

app.post('/api/articles/:name/vote', (req, res) => {
  const articleName = req.params.name;

  articlesInfo[articleName].votes += 1;

  res.status(200).send(`${articleName} now has ${articlesInfo[articleName].votes} votes!`);
});

app.listen(8000, () => {
  console.log('Listening on port 8000');
});