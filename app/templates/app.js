function displayCurrentBlock() {
    var elem = document.getElementById("currentBlock");
    web3 = new Web3(web3.currentProvider);
    if (elem) {
        web3.eth.getBlockNumber(function(err, res) {
            if (err) {
            	console.error('getBlockNumber error', err)
            	console.log('Did you install the parity extension? https://chrome.google.com/webstore/detail/parity-ethereum-integrati/himekenlppkgeaoeddcliojfddemadig')
            }
            elem.innerHTML = res;
        })
    }
}

setInterval(displayCurrentBlock, 2500);