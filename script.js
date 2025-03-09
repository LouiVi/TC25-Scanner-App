app.LoadPlugin( "BarcodeReader" );
reader = app.CreateObject( "BarcodeReader" );
let scannedData = '';

var inputField = document.getElementById('scanHere');

inputField.addEventListener('input', function() {
    this.value = this.value.replace(/<\/?scan>/g, ''); // Remove <scan> and </scan> tags
    const outputDiv = document.getElementById('output1');
        outputDiv.innerText = "*" + this.value + "*";
         const outputDiv2 = document.getElementById('output2');
        outputDiv2.innerText = "*" + this.value + "*";
});


document.getElementById('scanHere').addEventListener('onChange', async function(event) {
document.getElementById('scanHere').innerHTML = document.getElementById('scanHere').innerHTML.replace('<script'+'>', '').replace('</script'+'>');
});
document.addEventListener('keypress', async function(event) {
    if (event.charCode > 31 && event.charCode < 127) {
        scannedData += String.fromCharCode(event.charCode);
        const outputDiv = document.getElementById('output');
        outputDiv.innerText = scannedData;
    }

    // Optionally, handle the Enter key to process the scanned data
    if (event.key === 'Enter') {
  //  alert("enter");
    app.WriteFile( "data.txt", scannedData)
   // app.Alert(scannedData.replace("<scan>", "").replace("</scan>", ""));
        await processScannedData(scannedData);
        //scannedData = ''; // Clear after processing
    }
});

async function processScannedData(data) {
//alert(data.replace("<scan>",""));
    // Implement your logic to handle the scanned data
    //console.log('Scanned Data:', data);
    // You can send this data to a server or perform other actions
}