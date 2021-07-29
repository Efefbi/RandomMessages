 const messages = ['Love is pure', 'Charity never fail','Love is compassionate'];
 const randomness = Math.floor(Math.random() * messages.length);
 const mixmessage = () => {
	 const randomMessage = messages[randomness];
	 //document.write(randomMessage);
     console.log(messages[randomness])
 }
 mixmessage();