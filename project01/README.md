## Goal
Create 2 encrypted secure webservers with additional data

## Azure Services Used
- Virtual Machines
- Vnet (everything was on the same Vnet and subnet)
- Installing webserver Linux and Windows
- Network Security Group
- Public IP
- Azure Keyvault
- Azure Disk Encryption / Bitlocker
- Disk snapshots
- Got more familliar with Azure Portal

## Steps Summary
1. Created a virtual network and subnet for the environment.
2. Deployed a Windows Server VM with a public IP and configured RDP access.
3. Installed and tested IIS on the Windows VM to verify the web server was working.
4. Deployed a Linux VM (Ubuntu) with a public IP using SSH key authentication.
5. Connected to the Linux VM via SSH and installed Nginx to run a web server.
6. Created a snapshot of the Linux VM disk for backup and recovery testing.
7. Created and attached a data disk to the Windows VM.
8. Created an Azure Key Vault and generated an encryption key.
9. Configured the Windows VM disk to use the Key Vault key for encryption.
10. Enabled and verified BitLocker on the Windows VM.
11. Tested both web servers by accessing them through their public IP addresses.
12. Documented the project with screenshots and uploaded it to GitHub.

## Security
- only HTTP allowed publicly
- SSH key authentication used for Linux
- RDP access restricted by NSG
- Bitlocker for drivers on Windows Webserver

## What I Learned
1. How to connect from Windows to a Linux VM using SSH keys and fix permission errors on private keys on.
2. How to enable BitLocker disk encryption on a Windows VM using Azure Key Vault.
3. That Azure Key Vault security settings (firewall and purge protection) must be enabled before a VM can use it.
4. To give access to the Key Vault i need to add my public IP of my PC to the firewall rules.
5. That Azure error messages and warnings are very clear and ussualy show you what is wrong.
6. That there is a delay in Azure resource limits and quotas and that can cause delays when creating resources.
7. That public IP and disk all cost money when you dont use them. So delete all your resources when your done!
8. You create the SNAPSHOT on the disk  resource not the VM resource.
