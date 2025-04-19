
import React from 'react';

const Index = () => {
  // This is just a wrapper component that injects our vanilla HTML 
  // We're using dangerouslySetInnerHTML since this is a special case
  // where we want to use vanilla HTML/CSS/JS instead of React
  return (
    <div 
      dangerouslySetInnerHTML={{
        __html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>NEERAJ - Dashboard</title>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
              <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
              <link rel="stylesheet" href="styles.css">
          </head>
          <body>
              <!-- Main Container -->
              <div class="container">
                  <!-- Sidebar -->
                  <aside id="sidebar">
                      <div class="sidebar-header">
                          <div class="logo">
                              <img src="https://via.placeholder.com/40" alt="Logo">
                              <h2>NEERAJ</h2>
                          </div>
                          <button id="sidebarClose"><i class="fas fa-times"></i></button>
                      </div>
                      
                      <nav class="sidebar-menu">
                          <ul>
                              <li class="active" onclick="openTab('dashboard')">
                                  <i class="fas fa-tachometer-alt"></i>
                                  <span>Dashboard</span>
                              </li>
                              <li onclick="openTab('deposit')">
                                  <i class="fas fa-wallet"></i>
                                  <span>Deposit</span>
                              </li>
                              <li onclick="openTab('withdraw')">
                                  <i class="fas fa-money-bill-wave"></i>
                                  <span>Withdraw</span>
                              </li>
                              <li onclick="openTab('profile')">
                                  <i class="fas fa-user"></i>
                                  <span>Profile</span>
                              </li>
                              <li onclick="openTab('team')">
                                  <i class="fas fa-users"></i>
                                  <span>Team</span>
                              </li>
                              <li onclick="openTab('tree')">
                                  <i class="fas fa-network-wired"></i>
                                  <span>Tree View</span>
                              </li>
                              <li onclick="openTab('income')">
                                  <i class="fas fa-chart-line"></i>
                                  <span>Income</span>
                              </li>
                              <li onclick="openTab('support')">
                                  <i class="fas fa-headset"></i>
                                  <span>Support</span>
                              </li>
                          </ul>
                      </nav>
                      
                      <div class="sidebar-footer">
                          <button class="logout-btn">
                              <i class="fas fa-sign-out-alt"></i>
                              <span>Logout</span>
                          </button>
                      </div>
                  </aside>
                  
                  <!-- Main Content -->
                  <main class="main-content">
                      <!-- Header -->
                      <header>
                          <div class="header-left">
                              <button id="menuToggle"><i class="fas fa-bars"></i></button>
                          </div>
                          
                          <div class="header-center">
                              <img src="https://via.placeholder.com/40" alt="Logo">
                              <h1>NEERAJ</h1>
                          </div>
                          
                          <div class="header-right">
                              <div class="user-profile">
                                  <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" alt="Profile">
                                  <div class="dropdown">
                                      <a href="#profile"><i class="fas fa-user"></i> Profile</a>
                                      <a href="#settings"><i class="fas fa-cog"></i> Settings</a>
                                      <a href="#logout"><i class="fas fa-sign-out-alt"></i> Logout</a>
                                  </div>
                              </div>
                          </div>
                      </header>
                      
                      <!-- Dashboard Tab -->
                      <section id="dashboard" class="tab-content active">
                          <div class="dashboard-header">
                              <h2>Dashboard</h2>
                              <p>Welcome back, John Doe!</p>
                          </div>
                          
                          <div class="dashboard-grid">
                              <!-- User Profile Card -->
                              <div class="card profile-card">
                                  <div class="profile-image">
                                      <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" alt="John Doe">
                                  </div>
                                  <div class="profile-info">
                                      <h3>John Doe</h3>
                                      <p>ID: NEE12345</p>
                                      <p>Rank: Diamond</p>
                                      <p>Joined: Jan 15, 2023</p>
                                      <button class="btn btn-outline">Edit Profile</button>
                                  </div>
                              </div>
                              
                              <!-- Total Gain Card -->
                              <div class="card total-gain-card">
                                  <h3>Total Gain</h3>
                                  <div class="total-amount">$5,830.25</div>
                                  <div class="gain-breakdown">
                                      <div class="gain-item">
                                          <span class="gain-label">Direct</span>
                                          <span class="gain-value">$1,250.00</span>
                                      </div>
                                      <div class="gain-item">
                                          <span class="gain-label">Team</span>
                                          <span class="gain-value">$3,780.25</span>
                                      </div>
                                      <div class="gain-item">
                                          <span class="gain-label">Growth</span>
                                          <span class="gain-value">$350.00</span>
                                      </div>
                                      <div class="gain-item">
                                          <span class="gain-label">Bonus</span>
                                          <span class="gain-value">$450.00</span>
                                      </div>
                                  </div>
                              </div>
                              
                              <!-- Wallet Card -->
                              <div class="card wallet-card">
                                  <h3>Wallet</h3>
                                  <div class="wallet-balance">
                                      <h4>Available Balance</h4>
                                      <div class="balance-amount">$2,458.75</div>
                                  </div>
                                  <div class="wallet-buttons">
                                      <button class="btn btn-primary"><i class="fas fa-plus"></i> Top-Up</button>
                                      <button class="btn btn-outline"><i class="fas fa-arrow-right"></i> Withdraw</button>
                                  </div>
                              </div>
                              
                              <!-- Referral Link Card -->
                              <div class="card referral-card">
                                  <h3>Referral Link</h3>
                                  <p>Share this link to invite new members</p>
                                  <div class="referral-link-container">
                                      <input type="text" id="referralLink" value="https://neeraj.com/ref/johndoe" readonly>
                                      <button onclick="copyReferral()" class="btn btn-outline"><i class="fas fa-copy"></i></button>
                                  </div>
                              </div>
                              
                              <!-- Quick Links -->
                              <div class="card quick-links">
                                  <h3>Quick Navigation</h3>
                                  <div class="quick-links-grid">
                                      <a href="#" class="quick-link-item" onclick="openTab('deposit')">
                                          <div class="quick-link-icon">
                                              <i class="fas fa-wallet"></i>
                                          </div>
                                          <span>Deposit</span>
                                      </a>
                                      <a href="#" class="quick-link-item" onclick="openTab('withdraw')">
                                          <div class="quick-link-icon">
                                              <i class="fas fa-money-bill-wave"></i>
                                          </div>
                                          <span>Withdraw</span>
                                      </a>
                                      <a href="#" class="quick-link-item" onclick="openTab('team')">
                                          <div class="quick-link-icon">
                                              <i class="fas fa-users"></i>
                                          </div>
                                          <span>My Team</span>
                                      </a>
                                      <a href="#" class="quick-link-item" onclick="openTab('income')">
                                          <div class="quick-link-icon">
                                              <i class="fas fa-chart-line"></i>
                                          </div>
                                          <span>Income</span>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </section>
                      
                      <!-- Deposit Tab -->
                      <section id="deposit" class="tab-content">
                          <div class="section-header">
                              <h2>Deposit Funds</h2>
                              <p>Add funds to your wallet</p>
                          </div>
                          
                          <div class="deposit-container">
                              <div class="card deposit-qr">
                                  <h3>Scan QR Code</h3>
                                  <div class="qr-container">
                                      <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=0x1a2b3c4d5e6f7g8h9i0j" alt="Wallet QR Code">
                                  </div>
                              </div>
                              
                              <div class="card deposit-address">
                                  <h3>Wallet Address</h3>
                                  <div class="wallet-address-container">
                                      <input type="text" id="walletAddress" value="0x1a2b3c4d5e6f7g8h9i0j" readonly>
                                      <button onclick="copyWalletAddress()" class="btn btn-outline"><i class="fas fa-copy"></i></button>
                                  </div>
                                  <p class="address-note">Send only BTC to this deposit address</p>
                              </div>
                              
                              <div class="card deposit-form">
                                  <h3>Deposit Details</h3>
                                  <form>
                                      <div class="form-group">
                                          <label>Amount</label>
                                          <input type="number" placeholder="0.00" min="0" step="0.01">
                                      </div>
                                      
                                      <div class="form-group">
                                          <label>Transaction Hash</label>
                                          <input type="text" placeholder="Enter transaction hash">
                                      </div>
                                      
                                      <div class="form-group file-upload">
                                          <label>Upload Receipt (Optional)</label>
                                          <div class="file-input-container">
                                              <input type="file" class="file-input" id="receiptUpload">
                                              <label for="receiptUpload" class="file-label">Choose File</label>
                                              <span class="file-name">No file chosen</span>
                                          </div>
                                      </div>
                                      
                                      <button type="submit" class="btn btn-primary">Submit Deposit</button>
                                  </form>
                              </div>
                          </div>
                      </section>
                      
                      <!-- Withdraw Tab -->
                      <section id="withdraw" class="tab-content">
                          <div class="section-header">
                              <h2>Withdraw Funds</h2>
                              <p>Withdraw funds from your wallet</p>
                          </div>
                          
                          <div class="withdraw-container">
                              <div class="card withdraw-balance">
                                  <h3>Available Balance</h3>
                                  <div class="balance-amount">$2,458.75</div>
                              </div>
                              
                              <div class="card withdraw-form">
                                  <h3>Withdrawal Details</h3>
                                  <form>
                                      <div class="form-group">
                                          <label>Withdrawal Method</label>
                                          <select id="withdrawMethod">
                                              <option value="bank">Bank Transfer</option>
                                              <option value="crypto">Cryptocurrency</option>
                                              <option value="paypal">PayPal</option>
                                          </select>
                                      </div>
                                      
                                      <div id="bankDetails">
                                          <div class="form-group">
                                              <label>Bank Name</label>
                                              <input type="text" placeholder="Enter bank name">
                                          </div>
                                          
                                          <div class="form-group">
                                              <label>Account Number</label>
                                              <input type="text" placeholder="Enter account number">
                                          </div>
                                      </div>
                                      
                                      <div id="bankDetails2">
                                          <div class="form-group">
                                              <label>Account Holder Name</label>
                                              <input type="text" placeholder="Enter account holder name">
                                          </div>
                                          
                                          <div class="form-group">
                                              <label>SWIFT/BIC Code</label>
                                              <input type="text" placeholder="Enter SWIFT/BIC code">
                                          </div>
                                      </div>
                                      
                                      <div class="form-group crypto-address" style="display: none;">
                                          <label>Wallet Address</label>
                                          <input type="text" placeholder="Enter crypto wallet address">
                                      </div>
                                      
                                      <div class="form-group paypal-email" style="display: none;">
                                          <label>PayPal Email</label>
                                          <input type="email" placeholder="Enter PayPal email">
                                      </div>
                                      
                                      <div class="form-group">
                                          <label>Amount to Withdraw</label>
                                          <input type="number" id="withdrawAmount" placeholder="0.00" min="0" step="0.01">
                                      </div>
                                      
                                      <div class="withdraw-summary">
                                          <div class="summary-item">
                                              <span>Amount:</span>
                                              <span id="summaryAmount">0.00</span>
                                          </div>
                                          <div class="summary-item">
                                              <span>Fee (2%):</span>
                                              <span id="feeAmount">0.00</span>
                                          </div>
                                          <div class="summary-item total">
                                              <span>You will receive:</span>
                                              <span id="receiveAmount">0.00</span>
                                          </div>
                                      </div>
                                      
                                      <div class="form-group">
                                          <label>Password</label>
                                          <input type="password" placeholder="Enter your password">
                                      </div>
                                      
                                      <button type="submit" class="btn btn-primary">Withdraw Funds</button>
                                  </form>
                              </div>
                          </div>
                      </section>
                      
                      <!-- Profile Tab -->
                      <section id="profile" class="tab-content">
                          <div class="section-header">
                              <h2>Profile</h2>
                              <p>Manage your account information</p>
                          </div>
                          
                          <div class="profile-container">
                              <div class="card profile-form">
                                  <h3>Personal Information</h3>
                                  <form>
                                      <div class="form-group profile-picture">
                                          <div class="profile-image-container">
                                              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" alt="Profile">
                                              <div class="profile-image-overlay">
                                                  <i class="fas fa-camera"></i>
                                              </div>
                                          </div>
                                          <input type="file" id="profilePicture" hidden>
                                      </div>
                                      
                                      <div class="form-grid">
                                          <div class="form-group">
                                              <label>First Name</label>
                                              <input type="text" value="John">
                                          </div>
                                          
                                          <div class="form-group">
                                              <label>Last Name</label>
                                              <input type="text" value="Doe">
                                          </div>
                                          
                                          <div class="form-group">
                                              <label>Email</label>
                                              <input type="email" value="john.doe@example.com">
                                          </div>
                                          
                                          <div class="form-group">
                                              <label>Phone</label>
                                              <input type="tel" value="+1 (555) 123-4567">
                                          </div>
                                          
                                          <div class="form-group">
                                              <label>Country</label>
                                              <select>
                                                  <option>United States</option>
                                                  <option>Canada</option>
                                                  <option>United Kingdom</option>
                                                  <option>Australia</option>
                                                  <option>Germany</option>
                                              </select>
                                          </div>
                                          
                                          <div class="form-group">
                                              <label>City</label>
                                              <input type="text" value="New York">
                                          </div>
                                      </div>
                                      
                                      <button type="submit" class="btn btn-primary">Save Changes</button>
                                  </form>
                              </div>
                              
                              <div class="card security-form">
                                  <h3>Security Settings</h3>
                                  <form>
                                      <div class="form-group">
                                          <label>Current Password</label>
                                          <input type="password" placeholder="Enter current password">
                                      </div>
                                      
                                      <div class="form-group">
                                          <label>New Password</label>
                                          <input type="password" placeholder="Enter new password">
                                      </div>
                                      
                                      <div class="form-group">
                                          <label>Confirm New Password</label>
                                          <input type="password" placeholder="Confirm new password">
                                      </div>
                                      
                                      <button type="submit" class="btn btn-primary">Update Password</button>
                                  </form>
                              </div>
                              
                              <div class="card kyc-form">
                                  <h3>KYC Verification</h3>
                                  <div class="verification-status">
                                      <span class="status-badge pending">Pending Verification</span>
                                  </div>
                                  
                                  <form>
                                      <div class="form-group file-upload">
                                          <label>ID Card Front</label>
                                          <div class="file-input-container">
                                              <input type="file" class="file-input" id="idFront">
                                              <label for="idFront" class="file-label">Choose File</label>
                                              <span class="file-name">No file chosen</span>
                                          </div>
                                      </div>
                                      
                                      <div class="form-group file-upload">
                                          <label>ID Card Back</label>
                                          <div class="file-input-container">
                                              <input type="file" class="file-input" id="idBack">
                                              <label for="idBack" class="file-label">Choose File</label>
                                              <span class="file-name">No file chosen</span>
                                          </div>
                                      </div>
                                      
                                      <div class="form-group file-upload">
                                          <label>Selfie with ID</label>
                                          <div class="file-input-container">
                                              <input type="file" class="file-input" id="selfieId">
                                              <label for="selfieId" class="file-label">Choose File</label>
                                              <span class="file-name">No file chosen</span>
                                          </div>
                                      </div>
                                      
                                      <button type="submit" class="btn btn-primary">Submit for Verification</button>
                                  </form>
                              </div>
                          </div>
                      </section>
                      
                      <!-- Team Tab -->
                      <section id="team" class="tab-content">
                          <div class="section-header">
                              <h2>My Team</h2>
                              <p>Manage and view your team members</p>
                          </div>
                          
                          <div class="team-container">
                              <div class="team-stats card-grid">
                                  <div class="card stat-card">
                                      <h3>Direct Referrals</h3>
                                      <div class="stat-value">12</div>
                                      <div class="stat-details">
                                          <div class="stat-detail">
                                              <span>Active: 10</span>
                                          </div>
                                          <div class="stat-detail">
                                              <span>Inactive: 2</span>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div class="card stat-card">
                                      <h3>Team Size</h3>
                                      <div class="stat-value">85</div>
                                      <div class="stat-details">
                                          <div class="stat-detail">
                                              <span>Active: 68</span>
                                          </div>
                                          <div class="stat-detail">
                                              <span>Inactive: 17</span>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div class="card stat-card">
                                      <h3>Team Growth</h3>
                                      <div class="stat-value">+15%</div>
                                      <div class="stat-details">
                                          <div class="stat-detail">
                                              <span>This Month: +8</span>
                                          </div>
                                          <div class="stat-detail">
                                              <span>Last Month: +5</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              
                              <div class="card team-table-card">
                                  <div class="structure-tabs">
                                      <button class="tab-btn active" data-tab="direct">Direct Referrals</button>
                                      <button class="tab-btn" data-tab="team">Team Structure</button>
                                  </div>
                                  
                                  <div id="direct-tab" class="structure-tab-content active">
                                      <div class="table-container">
                                          <table class="data-table">
                                              <thead>
                                                  <tr>
                                                      <th>ID</th>
                                                      <th>Name</th>
                                                      <th>Rank</th>
                                                      <th>Join Date</th>
                                                      <th>Status</th>
                                                      <th>Action</th>
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                  <tr>
                                                      <td>NEE54321</td>
                                                      <td>Michael Brown</td>
                                                      <td>Gold</td>
                                                      <td>Jan 28, 2023</td>
                                                      <td><span class="status-badge active">Active</span></td>
                                                      <td><button class="btn btn-sm" onclick="showUserDetails('NEE54321')">View</button></td>
                                                  </tr>
                                                  <tr>
                                                      <td>NEE78965</td>
                                                      <td>Sarah Johnson</td>
                                                      <td>Silver</td>
                                                      <td>Feb 15, 2023</td>
                                                      <td><span class="status-badge active">Active</span></td>
                                                      <td><button class="btn btn-sm" onclick="showUserDetails('NEE78965')">View</button></td>
                                                  </tr>
                                                  <tr>
                                                      <td>NEE36547</td>
                                                      <td>David Wilson</td>
                                                      <td>Bronze</td>
                                                      <td>Mar 05, 2023</td>
                                                      <td><span class="status-badge inactive">Inactive</span></td>
                                                      <td><button class="btn btn-sm" onclick="showUserDetails('NEE36547')">View</button></td>
                                                  </tr>
                                                  <tr>
                                                      <td>NEE98745</td>
                                                      <td>Emma Thompson</td>
                                                      <td>Silver</td>
                                                      <td>Mar 22, 2023</td>
                                                      <td><span class="status-badge active">Active</span></td>
                                                      <td><button class="btn btn-sm" onclick="showUserDetails('NEE98745')">View</button></td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </div>
                                  </div>
                                  
                                  <div id="team-tab" class="structure-tab-content">
                                      <div class="table-container">
                                          <table class="data-table">
                                              <thead>
                                                  <tr>
                                                      <th>ID</th>
                                                      <th>Name</th>
                                                      <th>Upline</th>
                                                      <th>Rank</th>
                                                      <th>Team Size</th>
                                                      <th>Status</th>
                                                      <th>Action</th>
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                  <tr>
                                                      <td>NEE54321</td>
                                                      <td>Michael Brown</td>
                                                      <td>You</td>
                                                      <td>Gold</td>
                                                      <td>8</td>
                                                      <td><span class="status-badge active">Active</span></td>
                                                      <td><button class="btn btn-sm" onclick="showUserDetails('NEE54321')">View</button></td>
                                                  </tr>
                                                  <tr>
                                                      <td>NEE65432</td>
                                                      <td>Robert Davis</td>
                                                      <td>NEE54321</td>
                                                      <td>Silver</td>
                                                      <td>3</td>
                                                      <td><span class="status-badge active">Active</span></td>
                                                      <td><button class="btn btn-sm" onclick="showUserDetails('NEE65432')">View</button></td>
                                                  </tr>
                                                  <tr>
                                                      <td>NEE78965</td>
                                                      <td>Sarah Johnson</td>
                                                      <td>You</td>
                                                      <td>Silver</td>
                                                      <td>5</td>
                                                      <td><span class="status-badge active">Active</span></td>
                                                      <td><button class="btn btn-sm" onclick="showUserDetails('NEE78965')">View</button></td>
                                                  </tr>
                                                  <tr>
                                                      <td>NEE36547</td>
                                                      <td>David Wilson</td>
                                                      <td>You</td>
                                                      <td>Bronze</td>
                                                      <td>1</td>
                                                      <td><span class="status-badge inactive">Inactive</span></td>
                                                      <td><button class="btn btn-sm" onclick="showUserDetails('NEE36547')">View</button></td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      
                      <!-- Tree View Tab -->
                      <section id="tree" class="tab-content">
                          <div class="section-header">
                              <h2>Tree View</h2>
                              <p>Binary structure of your team</p>
                          </div>
                          
                          <div class="tree-container">
                              <div class="card tree-view-card">
                                  <div class="tree-wrapper">
                                      <div class="tree">
                                          <ul>
                                              <li>
                                                  <div class="tree-node root">
                                                      <div class="node-content">
                                                          <div class="node-avatar">
                                                              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" alt="John Doe">
                                                          </div>
                                                          <div class="node-info">
                                                              <h4>John Doe</h4>
                                                              <p>NEE12345</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <ul>
                                                      <li>
                                                          <div class="tree-node">
                                                              <div class="node-content">
                                                                  <div class="node-avatar">
                                                                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" alt="Michael Brown">
                                                                  </div>
                                                                  <div class="node-info">
                                                                      <h4>Michael Brown</h4>
                                                                      <p>NEE54321</p>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <ul>
                                                              <li>
                                                                  <div class="tree-node">
                                                                      <div class="node-content">
                                                                          <div class="node-avatar">
                                                                              <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" alt="Robert Davis">
                                                                          </div>
                                                                          <div class="node-info">
                                                                              <h4>Robert Davis</h4>
                                                                              <p>NEE65432</p>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </li>
                                                              <li>
                                                                  <div class="tree-node">
                                                                      <div class="node-content">
                                                                          <div class="node-avatar">
                                                                              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" alt="Jennifer Lee">
                                                                          </div>
                                                                          <div class="node-info">
                                                                              <h4>Jennifer Lee</h4>
                                                                              <p>NEE78901</p>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </li>
                                                          </ul>
                                                      </li>
                                                      <li>
                                                          <div class="tree-node">
                                                              <div class="node-content">
                                                                  <div class="node-avatar">
                                                                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" alt="Sarah Johnson">
                                                                  </div>
                                                                  <div class="node-info">
                                                                      <h4>Sarah Johnson</h4>
                                                                      <p>NEE78965</p>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <ul>
                                                              <li>
                                                                  <div class="tree-node">
                                                                      <div class="node-content">
                                                                          <div class="node-avatar">
                                                                              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" alt="Thomas White">
                                                                          </div>
                                                                          <div class="node-info">
                                                                              <h4>Thomas White</h4>
                                                                              <p>NEE24680</p>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </li>
                                                              <li>
                                                                  <div class="tree-node empty">
                                                                      <div class="node-content">
                                                                          <div class="node-avatar">
                                                                              <i class="fas fa-plus"></i>
                                                                          </div>
                                                                          <div class="node-info">
                                                                              <h4>Empty</h4>
                                                                              <p>Add member</p>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </li>
                                                          </ul>
                                                      </li>
                                                  </ul>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              
                              <div class="card tree-stats">
                                  <h3>Structure Summary</h3>
                                  <div class="tree-stats-grid">
                                      <div class="tree-stat-item">
                                          <h4>Left Team</h4>
                                          <div class="stat-value">28</div>
                                          <div class="stat-details">
                                              <div class="stat-detail">
                                                  <span>Active: 22</span>
                                              </div>
                                              <div class="stat-detail">
                                                  <span>Inactive: 6</span>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="tree-stat-item">
                                          <h4>Right Team</h4>
                                          <div class="stat-value">57</div>
                                          <div class="stat-details">
                                              <div class="stat-detail">
                                                  <span>Active: 46</span>
                                              </div>
                                              <div class="stat-detail">
                                                  <span>Inactive: 11</span>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="tree-stat-item">
                                          <h4>Team Balance</h4>
                                          <div class="stat-value">33%</div>
                                          <div class="progress-bar">
                                              <div class="progress" style="width: 33%"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      
                      <!-- Income Tab -->
                      <section id="income" class="tab-content">
                          <div class="section-header">
                              <h2>Income</h2>
                              <p>Track your earnings</p>
                          </div>
                          
                          <div class="income-container">
                              <div class="card income-summary">
                                  <div class="income-total">
                                      <h3>Total Earnings</h3>
                                      <div class="total-amount">$5,830.25</div>
                                  </div>
                                  
                                  <div class="income-stats">
                                      <div class="income-stat">
                                          <div class="stat-icon direct">
                                              <i class="fas fa-user"></i>
                                          </div>
                                          <div class="stat-info">
                                              <h4>Direct</h4>
                                              <div class="stat-amount">$1,250.00</div>
                                          </div>
                                      </div>
                                      
                                      <div class="income-stat">
                                          <div class="stat-icon team">
                                              <i class="fas fa-users"></i>
                                          </div>
                                          <div class="stat-info">
                                              <h4>Team</h4>
                                              <div class="stat-amount">$3,780.25</div>
                                          </div>
                                      </div>
                                      
                                      <div class="income-stat">
                                          <div class="stat-icon bonus">
                                              <i class="fas fa-gift"></i>
                                          </div>
                                          <div class="stat-info">
                                              <h4>Bonus</h4>
                                              <div class="stat-amount">$800.00</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              
                              <div class="card income-chart-card">
                                  <div class="chart-header">
                                      <h3>Income Trends</h3>
                                      <div class="chart-actions">
                                          <button class="btn btn-sm active" data-chart="line">Line</button>
                                          <button class="btn btn-sm" data-chart="bar">Bar</button>
                                      </div>
                                  </div>
                                  <div class="chart-container">
                                      <canvas id="incomeChart"></canvas>
                                  </div>
                              </div>
                              
                              <div class="income-details-grid">
                                  <div class="card distribution-chart-card">
                                      <h3>Income Distribution</h3>
                                      <div class="chart-container">
                                          <canvas id="distributionChart"></canvas>
                                      </div>
                                  </div>
                                  
                                  <div class="card income-table-card">
                                      <h3>Recent Transactions</h3>
                                      <div class="table-container">
                                          <table class="data-table">
                                              <thead>
                                                  <tr>
                                                      <th>Date</th>
                                                      <th>Type</th>
                                                      <th>Description</th>
                                                      <th>Amount</th>
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                  <tr>
                                                      <td>Apr 15, 2023</td>
                                                      <td>Direct</td>
                                                      <td>Referral Bonus - NEE54321</td>
                                                      <td class="amount positive">+$125.00</td>
                                                  </tr>
                                                  <tr>
                                                      <td>Apr 12, 2023</td>
                                                      <td>Team</td>
                                                      <td>Team Performance Bonus</td>
                                                      <td class="amount positive">+$235.50</td>
                                                  </tr>
                                                  <tr>
                                                      <td>Apr 10, 2023</td>
                                                      <td>Withdraw</td>
                                                      <td>Withdrawal to Bank</td>
                                                      <td class="amount negative">-$500.00</td>
                                                  </tr>
                                                  <tr>
                                                      <td>Apr 05, 2023</td>
                                                      <td>Bonus</td>
                                                      <td>Rank Achievement Bonus</td>
                                                      <td class="amount positive">+$150.00</td>
                                                  </tr>
                                                  <tr>
                                                      <td>Apr 01, 2023</td>
                                                      <td>Direct</td>
                                                      <td>Referral Bonus - NEE78965</td>
                                                      <td class="amount positive">+$125.00</td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      
                      <!-- Support Tab -->
                      <section id="support" class="tab-content">
                          <div class="section-header">
                              <h2>Support</h2>
                              <p>Get help and assistance</p>
                          </div>
                          
                          <div class="support-container">
                              <div class="card create-ticket">
                                  <h3>Create New Ticket</h3>
                                  <form>
                                      <div class="form-group">
                                          <label>Subject</label>
                                          <input type="text" placeholder="Enter ticket subject">
                                      </div>
                                      
                                      <div class="form-group">
                                          <label>Category</label>
                                          <select>
                                              <option>General Inquiry</option>
                                              <option>Account Issue</option>
                                              <option>Payment Problem</option>
                                              <option>Technical Support</option>
                                              <option>Feature Request</option>
                                          </select>
                                      </div>
                                      
                                      <div class="form-group">
                                          <label>Priority</label>
                                          <select>
                                              <option>Low</option>
                                              <option>Medium</option>
                                              <option>High</option>
                                          </select>
                                      </div>
                                      
                                      <div class="form-group">
                                          <label>Message</label>
                                          <textarea placeholder="Describe your issue or question in detail"></textarea>
                                      </div>
                                      
                                      <div class="form-group file-upload">
                                          <label>Attachments (Optional)</label>
                                          <div class="file-input-container">
                                              <input type="file" class="file-input" id="ticketAttachment" multiple>
                                              <label for="ticketAttachment" class="file-label">Choose Files</label>
                                              <span class="file-name">No file chosen</span>
                                          </div>
                                      </div>
                                      
                                      <button type="submit" class="btn btn-primary">Submit Ticket</button>
                                  </form>
                              </div>
                              
                              <div class="card ticket-history">
                                  <h3>Ticket History</h3>
                                  <div class="table-container">
                                      <table class="data-table">
                                          <thead>
                                              <tr>
                                                  <th>Ticket ID</th>
                                                  <th>Subject</th>
                                                  <th>Category</th>
                                                  <th>Date</th>
                                                  <th>Status</th>
                                                  <th>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td>#TK-10045</td>
                                                  <td>Unable to withdraw funds</td>
                                                  <td>Payment Problem</td>
                                                  <td>Apr 15, 2023</td>
                                                  <td><span class="status-badge open">Open</span></td>
                                                  <td><button class="btn btn-sm" onclick="viewTicket('#TK-10045')">View</button></td>
                                              </tr>
                                              <tr>
                                                  <td>#TK-10038</td>
                                                  <td>How to invite new members?</td>
                                                  <td>General Inquiry</td>
                                                  <td>Apr 10, 2023</td>
                                                  <td><span class="status-badge resolved">Resolved</span></td>
                                                  <td><button class="btn btn-sm" onclick="viewTicket('#TK-10038')">View</button></td>
                                              </tr>
                                              <tr>
                                                  <td>#TK-10027</td>
                                                  <td>Profile picture not updating</td>
                                                  <td>Technical Support</td>
                                                  <td>Apr 05, 2023</td>
                                                  <td><span class="status-badge resolved">Resolved</span></td>
                                                  <td><button class="btn btn-sm" onclick="viewTicket('#TK-10027')">View</button></td>
                                              </tr>
                                              <tr>
                                                  <td>#TK-10015</td>
                                                  <td>Commission calculation error</td>
                                                  <td>Payment Problem</td>
                                                  <td>Mar 28, 2023</td>
                                                  <td><span class="status-badge resolved">Resolved</span></td>
                                                  <td><button class="btn btn-sm" onclick="viewTicket('#TK-10015')">View</button></td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                              </div>
                              
                              <div class="card faq-section">
                                  <h3>Frequently Asked Questions</h3>
                                  <div class="accordion">
                                      <div class="accordion-item">
                                          <div class="accordion-header">
                                              <h4>How do I withdraw my earnings?</h4>
                                              <i class="fas fa-chevron-down"></i>
                                          </div>
                                          <div class="accordion-content">
                                              <p>To withdraw your earnings, navigate to the Withdraw tab in your dashboard. Enter the amount you wish to withdraw and select your preferred payment method (Bank Transfer, Cryptocurrency, or PayPal). Complete the required details and click "Withdraw Funds".</p>
                                          </div>
                                      </div>
                                      
                                      <div class="accordion-item">
                                          <div class="accordion-header">
                                              <h4>How does the referral system work?</h4>
                                              <i class="fas fa-chevron-down"></i>
                                          </div>
                                          <div class="accordion-content">
                                              <p>Our referral system is based on a binary structure. You earn commissions from direct referrals and from the performance of your team. Each direct referral is placed either on your left or right team. Commissions are calculated based on the volume generated by both teams.</p>
                                          </div>
                                      </div>
                                      
                                      <div class="accordion-item">
                                          <div class="accordion-header">
                                              <h4>What is KYC verification and why is it required?</h4>
                                              <i class="fas fa-chevron-down"></i>
                                          </div>
                                          <div class="accordion-content">
                                              <p>KYC (Know Your Customer) verification is a process where we verify your identity to comply with regulatory requirements. This helps prevent fraud and ensures security for all users. KYC verification is required before you can withdraw funds from your account.</p>
                                          </div>
                                      </div>
                                      
                                      <div class="accordion-item">
                                          <div class="accordion-header">
                                              <h4>How are ranks calculated in the system?</h4>
                                              <i class="fas fa-chevron-down"></i>
                                          </div>
                                          <div class="accordion-content">
                                              <p>Ranks are determined by a combination of your personal activity, team size, and team volume. As you progress through ranks (Bronze, Silver, Gold, Diamond, etc.), you unlock higher commission rates and special bonuses. Check the Rank Requirements document for specific criteria for each rank.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                  </main>
              </div>
              
              <!-- Modal -->
              <div id="mainModal" class="modal">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h3 id="modalTitle">Modal Title</h3>
                          <button id="modalClose"><i class="fas fa-times"></i></button>
                      </div>
                      <div class="modal-body" id="modalBody">
                          <!-- Modal content will be inserted here -->
                      </div>
                      <div class="modal-footer">
                          <button id="modalCancel" class="btn btn-outline">Cancel</button>
                          <button id="modalConfirm" class="btn btn-primary">Confirm</button>
                      </div>
                  </div>
              </div>
              
              <script src="script.js"></script>
          </body>
          </html>
        `
      }}
    />
  );
};

export default Index;
