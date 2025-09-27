<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Password Recovery</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet"/>

  <style>
    body {
      font-family: 'Poppins', sans-serif;
    }
    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
    .main {
      backdrop-filter: blur(12px);
      background: rgba(255, 255, 255, 0.15);
      /* border: 1px solid rgba(255, 255, 255, 0.25); */
    }
  </style>
</head>
<body class="flex items-center justify-center h-screen relative">

 <video autoplay loop muted playsinline class="absolute w-full h-full object-cover">
  <source src="188807-883827737_small.mp4" type="video/mp4">
</video>


  <div class="overlay"></div>

  <div class="main relative z-10 rounded-lg shadow-lg p-8 max-w-sm w-full text-white border-none">
    <h2 class="text-2xl font-semibold mb-4 text-center">Password Recovery</h2>


    <section class="hide" id="hide">
    <p class="text-center text-gray-200 mb-2">You will receive a one-time OTP code</p>
    <p class="text-center text-gray-300 mb-6">Enter your email address</p>

    <form action="" method="post">
      <input type="text" id="email" class="w-full border border-gray-400 bg-transparent text-white placeholder-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400" placeholder="Email or Username" required>
      <button type="submit" onclick="Show(event)"  class="w-full bg-gray-500 text-white font-semibold py-2 rounded-md hover:bg-teal-600 transition">Get OTP</button>
    </form>
    </section>


    <section class="hiden" id="hiden" style="display: none;">
<p class="text-gray-300 mb-6">Enter the OTP you received</p>

    <form action="" method="post">
      <input type="text" class="w-full border border-gray-400 bg-transparent text-white placeholder-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400" placeholder="Enter OTP" required>
      <button type="submit" onclick="Hide()" class="w-full bg-gray-500 text-white font-semibold py-2 rounded-md hover:bg-teal-600 transition">Verify OTP</button>
    </form>
    
    </section>
    <div class="text-center mt-4">
      <a href="login.html" class="text-teal-300 hover:underline">← Back to Login</a>
    </div>
  </div>


<script>
  function Show(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();

    if (email === "") {
      alert("Please enter your email before continuing.");
      return;
    }

    // Hide email section
    document.getElementById('hide').style.display = 'none';
    // Show OTP section
    document.getElementById('hiden').style.display = 'block';
  }

  function Hide(event) {
    event.preventDefault();
    alert("✅ OTP verified (you can now reset your password).");
    // window.location.href = "reset-password.html";
  }
</script>

</body>
</html>
