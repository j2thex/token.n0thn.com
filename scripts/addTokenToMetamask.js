document.getElementById('addToMetaMaskBtn').addEventListener('click', async () => {
    try {
        // Check if MetaMask is installed
        if (typeof window.ethereum !== 'undefined') {
            const tokenAddress = '0x0965c81656ed324d51f466B22b56645B8FDa2C73';  // Replace with your token's address
            const tokenSymbol = 'N0THN';  // Replace with your token's symbol
            const tokenDecimals = 18;  // Replace with your token's decimals
            const tokenImage = 'https://example.com/token-image.png';  // Replace with the URL to your token's image

            // Add token to MetaMask
            const wasAdded = await window.ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {
                        address: tokenAddress,
                        symbol: tokenSymbol,
                        decimals: tokenDecimals,
                        image: tokenImage,
                    },
                },
            });

            if (wasAdded) {
                console.log('Token added to MetaMask');
            } else {
                console.log('Token not added to MetaMask');
            }
        } else {
            alert('MetaMask is not installed. Please install it first.');
        }
    } catch (error) {
        console.error(error);
    }
});
