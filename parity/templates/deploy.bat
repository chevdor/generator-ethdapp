echo "Deploying your DAPP..."
XCOPY /YEI . "<%= DappPath %><%= DappId %>.app"
echo "Done! Don't forget to restart Parity"