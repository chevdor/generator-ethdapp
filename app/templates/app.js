function displayCurrentBlock() {
	var elem = document.getElementById("currentBlock");
	if (elem)
		elem.innerHTML = window.web3.eth.blockNumber;
}

setInterval(displayCurrentBlock, 1000);