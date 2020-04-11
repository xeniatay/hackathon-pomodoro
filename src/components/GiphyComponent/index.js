import React, {useEffect, useState} from "react";
import "./index.css";
const giphy = require('giphy-api')('p3IwlWj8yoT9f8HC7y24w7eSSSPIop3q');


const happyPhrases = ["good", "happy", "that was good", "i'm so excited", "good for you", "yay!", "thumbs up"];

const sadPhrases = ["crying", "you suck", "that was terrible", "oh no", "disappointed", "tragic", "thumbs down"];


function getPhrase(success) {
	return success ? happyPhrases[Math.floor(Math.random() * happyPhrases.length)] : sadPhrases[Math.floor(Math.random() * sadPhrases.length)]
}

function Gipher({isEpic, success}) {
	const [gif, setGif] = useState(null);
	const [title, setTitle] = useState("")

	useEffect(() => {
		console.log(isEpic);
		const s = isEpic ? 'epic!' : getPhrase(success);
		giphy.translate(
			{
				s,
				rating: 'pg-13'
			}, function (err, res) {
			if(err) {
				console.log(JSON.stringify(err, null, 4))
			}
			console.log(res);
			setGif(res.data.images.fixed_height.url);
			setTitle(res.data.title);
		});
	  }, [isEpic, success])

	
	return (
		<div className="giphy">
			{isEpic && <h1 color="green">EPIC</h1>}
			{gif ? <img src={gif} alt={title} title={title} style={{ zoom: isEpic ? 1.5 : 1 }} /> : <div/>}
		</div>
	);
}

export default Gipher;
