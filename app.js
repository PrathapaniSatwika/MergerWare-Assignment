let users = [];

function registerUser() {
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;

    const user = {
        email,
        role,
        loans: [],
        payments: [],
        status: 'Registered'
    };

    users.push(user);

    updateDashboard();
}

function requestLoan() {
    const currentUser = getCurrentUser();
    const loanAmount = document.getElementById('loanAmount').value;

    if (currentUser.role === 'borrower') {
        currentUser.loans.push({ amount: loanAmount });
        currentUser.status = 'Loan Requested';
        updateDashboard();
    }
}

function confirmPayment() {
    const currentUser = getCurrentUser();
    const paymentAmount = document.getElementById('paymentAmount').value;

    if (currentUser.role === 'lender') {
        currentUser.payments.push({ amount: paymentAmount });
        currentUser.status = 'Payment Confirmed';
        updateDashboard();
    }
}

function updateDashboard() {
    const dashboard = document.getElementById('dashboard');
    const statusDiv = document.getElementById('status');
    const transactionsDiv = document.getElementById('transactions');
    const loanRequestForm = document.getElementById('loanRequestForm');
    const paymentConfirmationForm = document.getElementById('paymentConfirmationForm');

    dashboard.style.display = 'block';
    loanRequestForm.style.display = 'none';
    paymentConfirmationForm.style.display = 'none';

    // Clear previous data
    statusDiv.innerHTML = '';
    transactionsDiv.innerHTML = '';

    users.forEach(user => {
        statusDiv.innerHTML += `<p>${user.email} - ${user.role} - Status: ${user.status}</p>`;

        if (user.loans.length > 0) {
            transactionsDiv.innerHTML += `<h3>${user.email}'s Loans</h3>`;
            user.loans.forEach(loan => {
                transactionsDiv.innerHTML += `<p>Loan Request: ${loan.amount}</p>`;
            });
        }

        if (user.payments.length > 0) {
            transactionsDiv.innerHTML += `<h3>${user.email}'s Payments</h3>`;
            user.payments.forEach(payment => {
                transactionsDiv.innerHTML += `<p>Payment: ${payment.amount}</p>`;
            });
        }
    });

    // Show Loan Request Form for Borrowers
    if (getCurrentUser().role === 'borrower' && getCurrentUser().status !== 'Loan Requested') {
        loanRequestForm.style.display = 'block';
    }

    // Show Payment Confirmation Form for Lenders
    if (getCurrentUser().role === 'lender' && getCurrentUser().status === 'Loan Requested') {
        paymentConfirmationForm.style.display = 'block';
    }
}

function getCurrentUser() {
    // In a real application, you would handle user authentication and retrieval here.
    // For simplicity, let's assume the first user in the array is the current user.
    return users[0];
}
// Add a function to handle payment confirmation by lender
function confirmPayment() {
    const currentUser = getCurrentUser();
    const paymentAmount = document.getElementById('paymentAmount').value;

    if (currentUser.role === 'lender') {
        currentUser.payments.push({ amount: paymentAmount });
        currentUser.status = 'Payment Confirmed';
        updateDashboard();
    }
}

// Add a function to get past payments for the current user
function getPastPayments() {
    const currentUser = getCurrentUser();

    if (currentUser.role === 'lender' && currentUser.payments.length > 0) {
        return currentUser.payments;
    }

    return [];
}
// Add a function to get past loans for the current user
function getPastLoans() {
    const currentUser = getCurrentUser();

    if (currentUser.role === 'borrower' && currentUser.loans.length > 0) {
        return currentUser.loans;
    }

    return [];
}
