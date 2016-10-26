echo "Deploying your DAPP..."
cp -Rpf . ~/.parity/dapps/<%= DappId %>.app
echo "Done! Don´t forget to restart Parity"
