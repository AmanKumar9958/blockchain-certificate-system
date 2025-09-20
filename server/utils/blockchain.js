const { Web3 } = require('web3');
const ABI = require('../abi/CertificateVerification.json'); 
const contractAddress = "0x7AbCCdd71EC2B1F1b6dA63E18b53944f4cA88276"; // Remix deployed contract

// Connect to Ethereum node
const web3 = new Web3(new Web3.providers.HttpProvider('https://eth-sepolia.g.alchemy.com/v2/orUaSOAo_T9X5VRjUTQWc'));

const contract = new web3.eth.Contract(ABI, contractAddress);

const addCertificate = async (hash) => {
    const privateKey = process.env.PRIVATE_KEY; // 🚨 Private key .env file se lein
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    web3.eth.accounts.wallet.add(account);

    try {
        const result = await contract.methods.addCertificate(hash).send({
            from: account.address,
            gas: 2000000,
        });
        
        // ✅ Event se certificateId nikaalne ka sahi tareeka
        const certificateId = result.events.CertificateAdded.returnValues.certificateId;

        // ID ko string mein convert karein
        const idString = certificateId.toString(); 

        console.log(`Certificate added with correct ID: ${idString}`);
        return idString; // Sahi ID return karein

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