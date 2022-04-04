# buildspace Solana NFT Drop Project

## How to run

- Root folder is ./app folder

## Welcome 👋

To get started with this course, clone this repo and follow these commands:

1. cd into the `app` folder
2. Run `npm install` at the root of your directory
3. Run `npm run start` to start the project
4. Start coding!

### What is the .vscode Folder?

If you use VSCode to build your app, we included a list of suggested extensions that will help you build this project! Once you open this project in VSCode, you will see a popup asking if you want to download the recommended extensions :).

### Questions?

Have some questions make sure you head over to your [buildspace Dashboard](https://app.buildspace.so/projects/CO77556be5-25e9-49dd-a799-91a2fc29520e) and link your Discord account so you can get access to helpful channels and your instructor!

## Install Candy Machine CLI for Solana

- git version 2.31.1 (or higher!)
- node --version -> v14.17.0 (or higher, below v17 -- we found that node v16 works best)
- yarn --version -> 1.22.11 (or higher!)
- ts-node --version -> v10.2.1 (or higher!)
- Solana installation <https://docs.solana.com/cli/install-solana-cli-tools#use-solanas-install-tool>
- Metaplex repo <https://github.com/metaplex-foundation/metaplex/tags>
  
## Deployment

- Deploy contract by running from the app folder "ts-node "C:\Users\d92187\metaplex\js\packages\cli\src\candy-machine-v2-cli.ts" upload -e devnet -k "C:\Users\d92187\.config\solana\devnet.json" -cp config.json ./assets"
- NFT collection contract deployed at HiMLEtEXn4aTZYcZfuQSM9oQ8v6J9ab5nQ9ixsP8M33k <https://explorer.solana.com/address/HiMLEtEXn4aTZYcZfuQSM9oQ8v6J9ab5nQ9ixsP8M33k?cluster=devnet>
- To re-deploy NFTs and run upload again, delete .cache folder of /app folder and run from the app folder "ts-node "C:\Users\d92187\metaplex\js\packages\cli\src\candy-machine-v2-cli.ts" upload -e devnet -k "C:\Users\d92187\.config\solana\devnet.json" -cp config.json ./assets"
