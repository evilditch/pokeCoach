# Security of PokeCoach

- when a new user created, an encryption key is generated
- access to the encryption key is only with the user's password
- user's info (username, encryption key) is in a different database than the user's data 
- when the user adds any information to the app, the information is encrypted befor being stored in the database
- if the user wants to allow another user access to their data, the encryption key share (or some public key system is used... <https://crypto.stackexchange.com/questions/18619/multi-key-decryption>)
- when another user's access removed, the data is re-encrypted 
