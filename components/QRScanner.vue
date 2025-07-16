<template>
  <div>
    <h1></h1>
    <!-- QR Scanner Container -->
    <div id="qr-reader" style="width: 450px; height: 350px;"></div>
    <p>{{ scannedResult }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scannedResult: '', // To store the result of the scan
    };
  },
  mounted() {
    this.startScanner();
  },
  methods: {
    startScanner() {
      // Success callback when QR code is scanned
      const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        this.scannedResult = decodedText; // Set the scanned result
      };

      // Error callback for any issues while scanning
      const qrCodeErrorCallback = (errorMessage) => {
        console.error('QR Code Error: ', errorMessage);
      };

      // Start scanning process
      const html5QrCode = new this.$html5qrcode('qr-reader'); // Initialize the QR code reader
      html5QrCode.start(
        { facingMode: 'environment' }, // Use the back camera by default
        {
          fps: 10, // Frames per second (fps) for scanning
          qrbox: 250, // Size of the scanning area
        },
        qrCodeSuccessCallback,
        qrCodeErrorCallback
      ).catch((err) => {
        console.error('QR code scanner initialization failed:', err);
      });
    }
  }
};
</script>

<style scoped>
#qr-reader {
  border: 0px solid #000;
  border-radius: 10px;
  
}
</style>