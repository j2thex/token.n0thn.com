const stickman = document.getElementById("stickman");

document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const parent = this.parentElement;
            const answer = parent.querySelector('.faq-answer');

            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(function(button) {
        button.addEventListener('click', function() {
            const parent = button.parentElement;
            if (parent.classList.contains('active')) {
                parent.classList.remove('active');
            } else {
                parent.classList.add('active');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const stickman = document.getElementById("sliding-stickman");
    const leftArm = document.getElementById("left-arm");
    let direction = 1;
    let angle = 0;

    function wave() {
        angle += direction * 5;
        if (angle >= 20 || angle <= -20) {
            direction = -direction;
        }
        leftArm.setAttribute("transform", `rotate(${angle}, 50, 60)`);
        requestAnimationFrame(wave);
    }

    wave(); // Start the waving animation
});

window.addEventListener("DOMContentLoaded", function() {
    initLeftStickmanWave();
});

function initLeftStickmanWave() {
    const rightArm = document.getElementById("right-arm-left");
    let direction = 1;
    let angle = -70;
    let animationFrameId;  

    function wave() {
        angle += direction * 5;
        if (angle >= -50 || angle <= -90) {
            direction = -direction;
        }
        rightArm.setAttribute("transform", `rotate(${angle}, 50, 60)`);
        animationFrameId = requestAnimationFrame(wave);
    }

    wave();
    setTimeout(() => {
        cancelAnimationFrame(animationFrameId);  // Stop the waving after 15 seconds
    }, 15000);
}

function copyToClipboard() {
    var copyText = document.getElementById("contractAddress");
    copyText.select();
    document.execCommand("copy");
}
function copyToClipboardmain() {
    var copyText = document.getElementById("maincontractAddress");
    copyText.select();
    document.execCommand("copy");
}

const contractAddress = '0x0965c81656ed324d51f466B22b56645B8FDa2C73'; // Replace with your token's contract address
const ABI = [{
    "inputs": [
      {
        "internalType": "uint256",
        "name": "initialSupply",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }]; // Replace with your token's ABI (Application Binary Interface)

document.getElementById('connectMetamaskBtn').addEventListener('click', async function() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            if (accounts.length > 0) {

                this.textContent = "MetaMask Connected!";
                
                // Initialize web3
                const web3 = new Web3(window.ethereum);
                
                // Create a new contract instance
                const contract = new web3.eth.Contract(ABI, contractAddress);
                
                // Fetch the token balance
                const rawBalance = await contract.methods.balanceOf(accounts[0]).call();
                const balance = web3.utils.fromWei(rawBalance, 'ether');


                
                // Update the balance in the HTML
                document.getElementById('tokenBalance').textContent = `Your N0THN Balance: ${balance}`;
            } else {
                alert('Please connect MetaMask to continue.');
            }
        } catch (error) {
            alert('Error connecting to MetaMask. Please ensure it is set up correctly.');
        }
    } else {
        // MetaMask is not installed
        alert('Please install MetaMask to continue.');
    }
});

async function switchToGoerli() {
    try {
        await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
                chainId: '0x5',
                chainName: 'Goerli Testnet',
                nativeCurrency: {
                    name: 'Goerli ETH',
                    symbol: 'ETH',
                    decimals: 18
                },
                rpcUrls: ['https://goerli.infura.io/v3/a69b9712edf34a73875b1a786da3285c'],
                blockExplorerUrls: ['https://goerli.etherscan.io/']
            }]
        });

    } catch (error) {
        alert('Error switching to Goerli Testnet. Please ensure MetaMask is set up correctly and try again.');
    }
}

document.getElementById('switchToGoerli').addEventListener('click', switchToGoerli);


function showTab(tabName) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    document.getElementById(tabName).style.display = 'block';

    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    if (tabName === 'mainnet') {
        document.querySelector('.tab-button:nth-child(1)').classList.add('active');
    } else {
        document.querySelector('.tab-button:nth-child(2)').classList.add('active');
    }
}


