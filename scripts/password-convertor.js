function encrypt() {
    const plaintext = document.getElementById("password").value;
    const encryptionKey = document.getElementById("secret-key").value;
    const ciphertext = btoa(plaintext + encryptionKey);
    document.getElementById("encrypted-text").innerHTML = ciphertext;
}

function decrypt() {
    const ciphertext = document.getElementById("password").value;
    const encryptionKey = document.getElementById("secret-key").value;
    const plaintext = atob(ciphertext).replace(encryptionKey, "");
    document.getElementById("encrypted-text").innerHTML = plaintext;
}