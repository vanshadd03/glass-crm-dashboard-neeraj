
// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Sidebar Toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
        
        // For mobile
        sidebar.classList.toggle('active');
    });
    
    sidebarClose.addEventListener('click', function() {
        sidebar.classList.add('collapsed');
        mainContent.classList.add('expanded');
        
        // For mobile
        sidebar.classList.remove('active');
    });
    
    // Tab System
    const tabLinks = document.querySelectorAll('.sidebar-menu li');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Close sidebar on mobile after tab selection
            if (window.innerWidth <= 768) {
                sidebar.classList.add('collapsed');
                sidebar.classList.remove('active');
            }
        });
    });
    
    // Initialize charts after content is loaded
    initCharts();
    
    // Team structure tabs
    const structureTabs = document.querySelectorAll('.structure-tabs .tab-btn');
    structureTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            structureTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all content
            document.querySelectorAll('.structure-tab-content').forEach(c => c.classList.remove('active'));
            
            // Show selected content
            const tabId = this.getAttribute('data-tab') + '-tab';
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Income chart toggle
    const chartToggles = document.querySelectorAll('.chart-actions .btn');
    chartToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            chartToggles.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update chart type
            const chartType = this.getAttribute('data-chart');
            updateChartType(chartType);
        });
    });
    
    // File upload handling
    const fileInputs = document.querySelectorAll('.file-input');
    fileInputs.forEach(input => {
        input.addEventListener('change', function() {
            const fileName = this.files.length > 0 ? 
                (this.files.length > 1 ? `${this.files.length} files selected` : this.files[0].name) : 
                'No file chosen';
            
            const fileNameElement = this.parentElement.querySelector('.file-name');
            if (fileNameElement) {
                fileNameElement.textContent = fileName;
            }
        });
    });
    
    // Withdraw amount calculation
    const withdrawAmount = document.getElementById('withdrawAmount');
    const summaryAmount = document.getElementById('summaryAmount');
    const feeAmount = document.getElementById('feeAmount');
    const receiveAmount = document.getElementById('receiveAmount');
    
    if (withdrawAmount) {
        withdrawAmount.addEventListener('input', function() {
            const amount = parseFloat(this.value) || 0;
            const fee = amount * 0.02;
            const total = amount - fee;
            
            summaryAmount.textContent = amount.toFixed(2);
            feeAmount.textContent = fee.toFixed(2);
            receiveAmount.textContent = total.toFixed(2);
        });
    }
    
    // Withdraw method toggle
    const withdrawMethod = document.getElementById('withdrawMethod');
    if (withdrawMethod) {
        withdrawMethod.addEventListener('change', function() {
            const bankDetails = document.querySelectorAll('#bankDetails, #bankDetails2');
            const cryptoAddress = document.querySelector('.crypto-address');
            const paypalEmail = document.querySelector('.paypal-email');
            
            // Hide all first
            bankDetails.forEach(el => el.style.display = 'none');
            cryptoAddress.style.display = 'none';
            paypalEmail.style.display = 'none';
            
            // Show based on selection
            switch(this.value) {
                case 'bank':
                    bankDetails.forEach(el => el.style.display = 'block');
                    break;
                case 'crypto':
                    cryptoAddress.style.display = 'block';
                    break;
                case 'paypal':
                    paypalEmail.style.display = 'block';
                    break;
            }
        });
    }
    
    // Modal functionality
    const modal = document.getElementById('mainModal');
    const modalClose = document.getElementById('modalClose');
    const modalCancel = document.getElementById('modalCancel');
    
    if (modal && modalClose && modalCancel) {
        modalClose.addEventListener('click', closeModal);
        modalCancel.addEventListener('click', closeModal);
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
    
    // Initial setup
    openTab('dashboard'); // Default tab
});

// Tab Navigation
function openTab(tabName) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all tab links
    const tabLinks = document.querySelectorAll('.sidebar-menu li');
    tabLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Show the selected tab content
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to the clicked tab link
    const selectedLink = document.querySelector(`.sidebar-menu li[onclick="openTab('${tabName}')"]`);
    if (selectedLink) {
        selectedLink.classList.add('active');
    }
    
    // Update charts if income tab
    if (tabName === 'income') {
        updateCharts();
    }
}

// Copy Functions
function copyReferral() {
    const referralLink = document.getElementById('referralLink');
    if (referralLink) {
        referralLink.select();
        referralLink.setSelectionRange(0, 99999); // For mobile
        
        navigator.clipboard.writeText(referralLink.value)
            .then(() => showToast('Referral link copied to clipboard!'))
            .catch(err => console.error('Failed to copy: ', err));
    }
}

function copyWalletAddress() {
    const walletAddress = document.getElementById('walletAddress');
    if (walletAddress) {
        walletAddress.select();
        walletAddress.setSelectionRange(0, 99999); // For mobile
        
        navigator.clipboard.writeText(walletAddress.value)
            .then(() => showToast('Wallet address copied to clipboard!'))
            .catch(err => console.error('Failed to copy: ', err));
    }
}

// Modal Controls
function openModal(title, content, confirmCallback) {
    const modal = document.getElementById('mainModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalConfirm = document.getElementById('modalConfirm');
    
    // Set content
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    
    // Set confirm callback
    if (confirmCallback) {
        modalConfirm.onclick = confirmCallback;
        modalConfirm.style.display = 'block';
    } else {
        modalConfirm.style.display = 'none';
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModal() {
    const modal = document.getElementById('mainModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Show User Details
function showUserDetails(userId) {
    let userData;
    
    // Simulate data fetch based on userId
    switch (userId) {
        case 'NEE54321':
            userData = {
                name: 'Michael Brown',
                email: 'michael.brown@example.com',
                phone: '+1 (555) 987-6543',
                joinDate: 'Jan 28, 2023',
                status: 'Active',
                rank: 'Gold',
                earnings: '$850.25',
                referrals: 5,
                avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80'
            };
            break;
        case 'NEE78965':
            userData = {
                name: 'Sarah Johnson',
                email: 'sarah.johnson@example.com',
                phone: '+1 (555) 234-5678',
                joinDate: 'Feb 15, 2023',
                status: 'Active',
                rank: 'Silver',
                earnings: '$625.50',
                referrals: 3,
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80'
            };
            break;
        // Add more cases as needed
        default:
            userData = {
                name: 'User',
                email: 'user@example.com',
                phone: '+1 (555) 000-0000',
                joinDate: 'Jan 1, 2023',
                status: 'Unknown',
                rank: 'Basic',
                earnings: '$0.00',
                referrals: 0,
                avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80'
            };
    }
    
    // Create modal content
    const content = `
        <div class="user-details">
            <div class="user-profile">
                <div class="user-avatar">
                    <img src="${userData.avatar}" alt="${userData.name}">
                </div>
                <div class="user-info">
                    <h3>${userData.name}</h3>
                    <p>ID: ${userId}</p>
                    <span class="status-badge ${userData.status.toLowerCase()}">${userData.status}</span>
                </div>
            </div>
            
            <div class="user-stats">
                <div class="stat">
                    <span class="stat-label">Join Date</span>
                    <span class="stat-value">${userData.joinDate}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Rank</span>
                    <span class="stat-value">${userData.rank}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Total Earnings</span>
                    <span class="stat-value">${userData.earnings}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Referrals</span>
                    <span class="stat-value">${userData.referrals}</span>
                </div>
            </div>
            
            <div class="user-contact">
                <h4>Contact Information</h4>
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <span>${userData.email}</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <span>${userData.phone}</span>
                </div>
            </div>
        </div>
    `;
    
    openModal(`User Details - ${userData.name}`, content);
}

// View Ticket Details
function viewTicket(ticketId) {
    let ticketData;
    
    // Simulate data fetch based on ticketId
    switch (ticketId) {
        case '#TK-10045':
            ticketData = {
                id: '#TK-10045',
                subject: 'Unable to withdraw funds',
                type: 'Payment Problem',
                priority: 'High',
                date: 'Apr 15, 2023',
                status: 'Open',
                message: 'I attempted to withdraw funds yesterday but the transaction failed. The amount is still showing in my balance but I received a failed transaction email. Please help resolve this issue as soon as possible.',
                replies: [
                    {
                        user: 'Support Agent',
                        date: 'Apr 15, 2023',
                        message: 'Hello John, thank you for reaching out. I can see the failed transaction in our system. We are investigating the issue and will resolve it within 24 hours. Your funds are safe.',
                        isAdmin: true
                    }
                ]
            };
            break;
        case '#TK-10038':
            ticketData = {
                id: '#TK-10038',
                subject: 'How to invite new members?',
                type: 'General Inquiry',
                priority: 'Low',
                date: 'Apr 10, 2023',
                status: 'Resolved',
                message: 'I want to invite some friends to join the platform. Is there a specific process or link I should use?',
                replies: [
                    {
                        user: 'Support Agent',
                        date: 'Apr 10, 2023',
                        message: 'Hello John, you can invite new members by sharing your referral link. This can be found on your dashboard under the "Referral Link" card. Let me know if you need further assistance!',
                        isAdmin: true
                    },
                    {
                        user: 'John Doe',
                        date: 'Apr 11, 2023',
                        message: 'Thank you for the information! I found the referral link and have shared it with my friends.',
                        isAdmin: false
                    },
                    {
                        user: 'Support Agent',
                        date: 'Apr 11, 2023',
                        message: "You're welcome, John! Let us know if you have any other questions.",
                        isAdmin: true
                    }
                ]
            };
            break;
        // Add more cases as needed
        default:
            ticketData = {
                id: ticketId,
                subject: 'Ticket Subject',
                type: 'General Inquiry',
                priority: 'Medium',
                date: 'Jan 1, 2023',
                status: 'Open',
                message: 'Ticket message details...',
                replies: []
            };
    }
    
    // Build replies HTML
    let repliesHTML = '';
    if (ticketData.replies.length > 0) {
        repliesHTML = '<div class="ticket-replies"><h4>Replies</h4>';
        
        ticketData.replies.forEach(reply => {
            repliesHTML += `
                <div class="reply ${reply.isAdmin ? 'admin-reply' : 'user-reply'}">
                    <div class="reply-header">
                        <span class="reply-user">${reply.user}</span>
                        <span class="reply-date">${reply.date}</span>
                    </div>
                    <div class="reply-body">
                        <p>${reply.message}</p>
                    </div>
                </div>
            `;
        });
        
        repliesHTML += '</div>';
    }
    
    // Create modal content
    const content = `
        <div class="ticket-details">
            <div class="ticket-info">
                <div class="ticket-header">
                    <div class="ticket-meta">
                        <span class="ticket-id">${ticketData.id}</span>
                        <span class="ticket-date">${ticketData.date}</span>
                    </div>
                    <span class="status-badge ${ticketData.status.toLowerCase()}">${ticketData.status}</span>
                </div>
                
                <div class="ticket-subject">
                    <h3>${ticketData.subject}</h3>
                </div>
                
                <div class="ticket-tags">
                    <span class="ticket-type">${ticketData.type}</span>
                    <span class="priority-badge ${ticketData.priority.toLowerCase()}">${ticketData.priority}</span>
                </div>
                
                <div class="ticket-message">
                    <p>${ticketData.message}</p>
                </div>
            </div>
            
            ${repliesHTML}
            
            <div class="ticket-reply-form">
                <h4>Add Reply</h4>
                <textarea placeholder="Type your reply here..."></textarea>
                <button class="btn btn-primary">Send Reply</button>
            </div>
        </div>
    `;
    
    openModal(`Ticket Details - ${ticketData.id}`, content);
}

// Toast Notification
function showToast(message, type = 'success') {
    // Create toast container if it doesn't exist
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="toast-close">&times;</button>
    `;
    
    // Add toast to container
    toastContainer.appendChild(toast);
    
    // Handle close button
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
        toast.classList.add('removing');
        setTimeout(() => {
            toast.remove();
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 5000);
    
    // Add styles if not already added
    if (!document.getElementById('toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            .toast-container {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            
            .toast {
                min-width: 250px;
                padding: 15px;
                border-radius: 12px;
                background: var(--glass-bg);
                backdrop-filter: blur(10px);
                border: 1px solid var(--glass-border);
                box-shadow: var(--glass-shadow);
                display: flex;
                align-items: center;
                justify-content: space-between;
                animation: slideIn 0.3s ease forwards;
            }
            
            .toast.removing {
                animation: slideOut 0.3s ease forwards;
            }
            
            .toast-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .toast.success .toast-content i {
                color: var(--success);
            }
            
            .toast.error .toast-content i {
                color: var(--danger);
            }
            
            .toast.info .toast-content i {
                color: var(--info);
            }
            
            .toast-close {
                background: none;
                border: none;
                color: var(--text-secondary);
                font-size: 18px;
                cursor: pointer;
                transition: color 0.3s ease;
            }
            
            .toast-close:hover {
                color: var(--text-primary);
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Charts
let incomeChart, distributionChart;
let currentChartType = 'line';

function initCharts() {
    // Only initialize charts if income section is loaded
    const incomeSection = document.getElementById('income');
    if (!incomeSection) return;
    
    const incomeChartCanvas = document.getElementById('incomeChart');
    const distributionChartCanvas = document.getElementById('distributionChart');
    
    if (!incomeChartCanvas || !distributionChartCanvas) return;
    
    // Income Chart
    const incomeCtx = incomeChartCanvas.getContext('2d');
    incomeChart = new Chart(incomeCtx, {
        type: currentChartType,
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Direct Income',
                    data: [750, 920, 1050, 1250, 1400, 1600],
                    borderColor: '#9b87f5',
                    backgroundColor: 'rgba(155, 135, 245, 0.2)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Team Income',
                    data: [1200, 1950, 2500, 3100, 3500, 3780],
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.2)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Bonus Income',
                    data: [250, 350, 400, 450, 500, 450],
                    borderColor: '#FF9800',
                    backgroundColor: 'rgba(255, 152, 0, 0.2)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#C8C8C9'
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(42, 48, 66, 0.9)',
                    titleColor: '#FFFFFF',
                    bodyColor: '#C8C8C9',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    padding: 10,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': $' + context.parsed.y;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        color: '#8E9196'
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        color: '#8E9196',
                        callback: function(value) {
                            return '$' + value;
                        }
                    }
                }
            }
        }
    });
    
    // Distribution Chart
    const distributionCtx = distributionChartCanvas.getContext('2d');
    distributionChart = new Chart(distributionCtx, {
        type: 'doughnut',
        data: {
            labels: ['Direct Income', 'Team Income', 'Growth Income', 'Bonus Income'],
            datasets: [{
                data: [1250, 3780, 890, 450],
                backgroundColor: [
                    '#9b87f5',
                    '#4CAF50',
                    '#2196F3',
                    '#FF9800'
                ],
                borderColor: 'rgba(42, 48, 66, 0.7)',
                borderWidth: 2,
                hoverOffset: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '65%',
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: '#C8C8C9',
                        boxWidth: 15,
                        padding: 15,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(42, 48, 66, 0.9)',
                    titleColor: '#FFFFFF',
                    bodyColor: '#C8C8C9',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    padding: 10,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                            const value = context.parsed;
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${context.label}: $${value} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

function updateCharts() {
    if (incomeChart && distributionChart) {
        incomeChart.update();
        distributionChart.update();
    } else {
        initCharts();
    }
}

function updateChartType(type) {
    if (!incomeChart) return;
    
    currentChartType = type;
    
    // Destroy existing chart
    incomeChart.destroy();
    
    // Recreate with new type
    const incomeCtx = document.getElementById('incomeChart').getContext('2d');
    incomeChart = new Chart(incomeCtx, {
        type: currentChartType,
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Direct Income',
                    data: [750, 920, 1050, 1250, 1400, 1600],
                    borderColor: '#9b87f5',
                    backgroundColor: 'rgba(155, 135, 245, 0.2)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Team Income',
                    data: [1200, 1950, 2500, 3100, 3500, 3780],
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.2)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Bonus Income',
                    data: [250, 350, 400, 450, 500, 450],
                    borderColor: '#FF9800',
                    backgroundColor: 'rgba(255, 152, 0, 0.2)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#C8C8C9'
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(42, 48, 66, 0.9)',
                    titleColor: '#FFFFFF',
                    bodyColor: '#C8C8C9',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    padding: 10,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': $' + context.parsed.y;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        color: '#8E9196'
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        color: '#8E9196',
                        callback: function(value) {
                            return '$' + value;
                        }
                    }
                }
            }
        }
    });
}
