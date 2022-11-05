# Security of GuideMeThrough

- when a new user created, an encryption key is generated
- access to the encryption key is only with the users password
- users info (username, encryption key) is in a different database than the users data 
- when the user adds any information to the app, the information is encrypted before being stored in the database
- if the user wants to allow another user access to their data, the encryption key is shared for selected time period (or some public key system is used... <https://crypto.stackexchange.com/questions/18619/multi-key-decryption>)
- when another users access is removed, the data is re-encrypted with new encryption key.
