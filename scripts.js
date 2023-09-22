const stickman = document.getElementById("stickman");

document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
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

document.getElementById('connectMetamaskBtn').addEventListener('click', async function() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            if (accounts.length > 0) {
                alert('Connected to MetaMask!');
                this.textContent = "MetaMask Connected!";
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
        alert('Switched to Goerli Testnet!');
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


