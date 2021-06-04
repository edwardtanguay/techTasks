const { findCertainCities } = require('./ex_pbLanguage_basicSkills');
const express = require('express');

const app = express();
const port = 3010;
app.set('view engine', 'ejs');
app.set('views','./express_views');

app.get('/', (req, res) => {
	res.render('index',
		{
			answer001: findCertainCities('Bordeaux')
		}
	);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
});