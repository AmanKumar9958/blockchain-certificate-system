# 📜 Blockchain-Based Certificate System

An intelligent solution to revolutionize the traditional method of certificate issuance and verification by leveraging blockchain technology. Our platform enhances security, reduces fraud, and simplifies the validation process for educational and professional certificates.

**Live Demo:** [Blockchain-Based Certificate System](https://blockcert.codewithaman.tech/)

---

## ✨ Features

* **🔐 Secure Certificate Storage**: Certificates are stored on the Ethereum blockchain, ensuring immutability and top-tier security.
* **🛡️ Tamper-Proof**: The inherent immutability of the blockchain makes every certificate completely tamper-proof.
* **🤖 Smart Contracts**: Automates the issuance process, ensuring certificates are generated only when specific criteria are met.
* **🔑 Unique Identifiers**: Each certificate is linked to a unique hash and can be instantly verified using a URL or QR code.
* **✅ Efficient Verification**: Allows organizations to verify certificates quickly and reliably through our platform.

---

## ⚙️ Tech Stack

* **Frontend**: React and Tailwind
* **Backend**: Node.js, Express and MongoDB
* **Blockchain**: Ethereum, Solidity
* **Development Tools**: MetaMask

---

## 🚀 Installation and Setup

To get a local copy up and running, follow these simple steps.

### 1. Clone the repository:
```bash
git clone [https://github.com/AmanKumar9958/blockchain-certificate-system.git](https://github.com/AmanKumar9958/blockchain-certificate-system.git)

```
### 2. Navigate into the project folder
```bash
cd blockchain-certificate-system
```

### 3. Navigate to client folder and install required packages
```bash
npm install
```

### 4. Navigate to server folder and install required packages
```bash
npm install
```

## 🔗 Blockchain Setup

### Install Metamask
Install the Metamask wallet extension and create an account on it and connect it with *Sepolia Test Network*.

### Get Sepolia ETH
You will need some ETH in your wallet for gas fees. Search Google for 'Sepolia Faucet' and claim free ETH to your MetaMask address from any website.

### Create a Web3 Provider Account
We have used Alchemy for this project. Create a free account on Alchemy and generate an API key for the Sepolia network.

### Update Configuration
Open the server/utils/blockchain.js file in your backend. Update the configuration by adding your Alchemy API key and the private key of your MetaMask account.

## 📄 Smart Contract Deployment

## Open Remix IDE
Open https://remix.ethereum.org/ in your browser.

### Create Smart Contract File
In the contracts folder, create a new file named CertificateVerification.sol and paste this code into it.

```bash
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CertificateVerification {
    mapping(bytes32 => bool) private certificates;

    function addCertificate(bytes32 _certificateHash) public {
        require(_certificateHash != 0, "Hash cannot be zero.");
        certificates[_certificateHash] = true;
    }

    function verifyCertificate(bytes32 _certificateHash) public view returns (bool) {
        return certificates[_certificateHash];
    }
}
```

### Compile
In the left panel, click on the Solidity compiler icon (🚀) and compile the contract. Make sure the version is 0.8.20 or higher.

### Deploy
Go to the "Deploy & Run Transactions" icon, select "Injected Provider – MetaMask", and connect your MetaMask account. Click the Deploy button and confirm the transaction in MetaMask.

### Copy Address and ABI
After deployment, copy the contract address from the "Deployed Contracts" section. From the ABI tab, copy the entire JSON code and paste it into your backend at server/abi/CertificateVerification.json.

### Final Configuration
In your server/utils/blockchain.js file, update the contractAddress with the new address.
