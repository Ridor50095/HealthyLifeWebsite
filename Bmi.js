function hitungBMI() {
    const tinggiBadan = document.getElementById('tinggiBadan').value / 100;
    const beratBadan = document.getElementById('beratBadan').value;
    const bmi = beratBadan / (tinggiBadan * tinggiBadan);
    
    let hasilBMI;
    if (bmi < 18.5) {
      hasilBMI = "Kurus";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      hasilBMI = "Ideal";
    } else if (bmi >= 25 && bmi <= 29.9) {
      hasilBMI = "Kelebihan Berat Badan";
    } else {
      hasilBMI = "Obesitas";
    }
  
    const hasilElement = document.getElementById('hasilBMI');
    hasilElement.innerText = `BMI Anda: ${bmi.toFixed(2)} (Status: ${hasilBMI})`;
  }
  