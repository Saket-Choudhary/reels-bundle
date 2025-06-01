document.getElementById('buyNowBtn').onclick = function (e) {
  e.preventDefault();

  var options = {
    key: "YOUR_RAZORPAY_KEY_HERE", // Replace with your Razorpay Key
    amount: 19900, // ₹199 in paise
    currency: "INR",
    name: "Your Brand Name",
    description: "Reels Bundle June 2025",
    image: "https://yourdomain.com/logo.png", // Optional
    handler: function (response) {
      window.location.href = "thankyou.html";
    },
    prefill: {
      name: "",
      email: "",
      contact: ""
    },
    theme: {
      color: "#f37254"
    }
  };

  var rzp = new Razorpay(options);
  rzp.open();
};
