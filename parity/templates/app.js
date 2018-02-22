// subscription APIs available, use it instead of manual polling
parity.api.subscribe('eth_blockNumber', function (error, blockNumber) {
  if (error) {
    console.error('unable to get blockNumber', error);
    return;
  }

  var elem = document.getElementById("currentBlock");
  if (elem) {
    // all numbers values returned as BigNumber, make it look pretty
    elem.innerHTML = blockNumber.toFormat(0);
  }
});