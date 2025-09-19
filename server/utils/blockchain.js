const { Web3 } = require('web3');
const ABI = require('../abi/CertificateVerification.json'); // Aage banayenge
const contractAddress = "0x3c4734935B89717aD5D03ec2cD6E165BA45ac90e"; // Remix se copy kiya hua address

// Connect to Ethereum node (e.g., Infura, Alchemy, or Ganache)
const web3 = new Web3(new Web3.providers.HttpProvider('https://eth-sepolia.g.alchemy.com/v2/orUaSOAo_T9X5VRjUTQWc'));

const contract = new web3.eth.Contract(ABI, contractAddress);

const addCertificate = async (hash) => {
    // Yahan hum private key ka use karke transaction send karenge.
    const privateKey = '0x2f51ab0f5da360b31521f6a4d45389af1ba85595795c830668c58bb4e5d25e12';
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    web3.eth.accounts.wallet.add(account);

    try {
        const result = await contract.methods.addCertificate(hash).send({
            from: account.address,
            gas: 2000000,
        });
        
        // Return value se certificateId lein
        const certificateId = result.blockNumber; // A simple ID based on block number

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