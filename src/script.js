
document.getElementById('mortgage-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const loanAmount = parseFloat(document.getElementById('mortgage-amount').value);
    const termYears = parseFloat(document.getElementById('mortgage-term').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
    const mortgageType = document.querySelector('input[name="mortgage-type"]:checked').value;

    // Convert term to months and interest rate to monthly rate
    const termMonths = termYears * 12;
    const monthlyRate = interestRate / 12;

    let monthlyPayment;

    // Calculation based on mortgage type
    if (mortgageType === 'repayment') {
      // Repayment Mortgage Formula
      monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1);
    } else if (mortgageType === 'interest-only') {
      // Interest-Only Mortgage Formula
      monthlyPayment = loanAmount * monthlyRate;
    }

    // Display the result
    document.getElementById('result').textContent = `£${monthlyPayment.toFixed(2)}`;
  });

  // Clear the form and reset the result
  document.getElementById('clear-all').addEventListener('click', function() {
    document.getElementById('mortgage-form').reset();
    document.getElementById('result').textContent = '£0.00';
  });




  function showSection(sectionId) {
          // Hide all sections
          const sections = document.querySelectorAll('.section');
          sections.forEach(section => section.classList.add('hidden'));

          // Show the selected section
          const sectionToShow = document.getElementById(sectionId);
          sectionToShow.classList.remove('hidden');
      }