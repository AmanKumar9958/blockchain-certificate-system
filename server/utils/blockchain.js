const Web3 = require('web3');
const ABI = require('../abi/CertificateVerification.json'); // Aage banayenge
const contractAddress = "0x3c4734935B89717aD5D03ec2cD6E165BA45ac90e"; // Remix se copy kiya hua address

// Connect to Ethereum node (e.g., Infura, Alchemy, or Ganache)
const web3 = new Web3(new Web3.providers.HttpProvider('https://eth-sepolia.g.alchemy.com/v2/orUaSOAo_T9X5VRjUTQWc'));

const contract = new web3.eth.Contract(ABI, contractAddress);

const addCertificate = async (hash) => {
    // Yahan hum private key ka use karke transaction send karenge.
    // Production mein yeh private key surakshit honi chahiye.
    const privateKey = 'YOUR_UNIVERSITY_ACCOUNT_PRIVATE_KEY';
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    web3.eth.accounts.wallet.add(account);

    try {
        const tx = await contract.methods.addCertificate(hash).send({
            from: account.address,
            gas: 2000000, // Adjust gas as needed
        });
        const certificateId = tx.events.CertificateAdded.returnValues.id; // Agar event use kiya ho
        console.log(`Certificate added with ID: ${certificateId}`);
        return certificateId;
    } catch (error) {
        console.error("Error adding certificate:", error);
        throw error;
    }
};

const getCertificateHash = async (certificateId) => {
    try {
        const hash = await contract.methods.getCertificateHash(certificateId).call();
        return hash;
    } catch (error) {
        console.error("Error fetching hash:", error);
        throw error;
    }
};

module.exports = {
    addCertificate,
    getCertificateHash,
};