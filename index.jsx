import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [showLoimport React, { useState } from "react";
import "./App.css";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  // State for login form
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  // State for signup form
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // Handle login
  function handleLogin() {
    if (!loginData.username || !loginData.password) {
      alert("⚠ Please enter username and password");
      return;
    }
    alert(`✅ Logged in as ${loginData.username}`);
    setShowLogin(false); // close popup after login
  }

  // Handle register
  function handleRegister() {
    if (!signupData.name || !signupData.email || !signupData.password) {
      alert("⚠ Please fill all required fields");
      return;
    }
    if (signupData.password !== signupData.confirmPassword) {
      alert("⚠ Passwords do not match");
      return;
    }
    alert(
      `✅ Registered Successfully!\nName: ${signupData.name}\nEmail: ${signupData.email}\nPhone: ${signupData.phone}`
    );
    setIsSignup(false); // go back to login
  }

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <a href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <div className="nav-right">
          <button onClick={() => setShowLogin(!showLogin)}>Login</button>
        </div>
      </nav>

      {/* Login / Signup Popup */}
      {showLogin && (
        <div className="login-popup">
          {!isSignup ? (
            <div>
              <h2>User Login</h2>
              <input
                type="text"
                placeholder="Username"
                value={loginData.username}
                onChange={(e) =>
                  setLoginData({ ...loginData, username: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
              <button type="button" onClick={handleLogin}>Login</button>
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                <span className="link" onClick={() => setIsSignup(true)}>
                  Create New Account
                </span>
              </p>
            </div>
          ) : (
            <div>
              <h2>Create Account</h2>
              <input
                type="text"
                placeholder="Full Name"
                value={signupData.name}
                onChange={(e) =>
                  setSignupData({ ...signupData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={signupData.phone}
                onChange={(e) =>
                  setSignupData({ ...signupData, phone: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Password"
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={signupData.confirmPassword}
                onChange={(e) =>
                  setSignupData({
                    ...signupData,
                    confirmPassword: e.target.value,
                  })
                }
              />
              <button type="button" onClick={handleRegister}>Register</button>
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                <span className="link" onClick={() => setIsSignup(false)}>
                  Back to Login
                </span>
              </p>
            </div>
          )}
        </div>
      )}

      {/* Header */}
      <header className="header" id="home">
        <h1>🩸 Blood Donation System</h1>
        <p>Save Lives Through Blood Donation</p>
      </header>

      {/* Home Content */}
      <section className="home-content">
        <h2>Welcome to Blood Donation Platform</h2>
        <p>
          This platform is developed to help patients who are in need of blood,
          especially in emergency situations, by easily connecting them with willing donors.
        </p>
        <p>
          We understand how difficult it can be to find a donor in critical moments, which is
          why we provide a system to store donor information by blood group and connect it to
          receivers based on availability.
        </p>
        <p>
          All the receiver has to do is enter the required blood group and their information,
          and our system will search and match with a donor based on the availability of data.
        </p>
        <p>Together, we can make a difference!</p>
      </section>

      {/* Main Sections */}
      <div className="main-container">
        <Section
          icon="❤"
          title="Become a Donor"
          desc="Your donation can save up to 3 lives. Choose your blood group to register as a donor."
          buttonText="Add Donor"
        />
        <Section
          icon="🏥"
          title="Need Blood"
          desc="Find compatible blood donors in your area. Select your blood group to search for donors."
          buttonText="Add Receiver"
        />
      </div>

      {/* Contact Section */}
      <section className="extra-section" id="contact">
        <h2>Contact Us</h2>
        <p>Email: support@bloodbridge.com</p>
        <p>Phone: +91 9876543210</p>
      </section>

      {/* About Section */}
      <section className="extra-section" id="about">
        <h2>About Blood Bridge</h2>
        <p>
          Blood Bridge is a platform to connect blood donors and receivers quickly
          and efficiently. Together, we save lives by ensuring timely access to
          blood in emergencies.
        </p>
      </section>
    </div>
  );
}

function Section({ icon, title, desc, buttonText }) {
  const groups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  return (
    <div className="section">
      <div className="icon">{icon}</div>
      <h2 className="section-title">{title}</h2>
      <p className="description">{desc}</p>
      <button className="main-button">{buttonText}</button>
      <div className="blood-groups">
        {groups.map((g) => (
          <button key={g} className="blood-group-btn">
            {g}
          </button>
        ))}
      </div>
    </div>
  );
}
gin, setShowLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="App">
      {/* Navbar */
      <nav className="navbar">
        <div className="nav-left">
          <a href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <div className="nav-right">
          <button onClick={() => setShowLogin(!showLogin)}>Login</button>
        </div>
      </nav>

      {/* Login / Signup Popup */}
      {showLogin && (
        <div className="login-popup">
          {!isSignup ? (
            <div>
              <h2>User Login</h2>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button>Login</button>
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                <span
                  className="link"
                  onClick={() => setIsSignup(true)}
                >
                  Create New Account
                </span>
              </p>
            </div>
          ) : (
            <div>
              <h2>Create Account</h2>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone Number" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button>Register</button>
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                <span className="link" onClick={() => setIsSignup(false)}>
                  Back to Login
                </span>
              </p>
            </div>
          )}
        </div>
      )}

      {/* Header */}
      <header className="header" id="home">
        <h1>🩸 Blood Donation System</h1>
        <p>Save Lives Through Blood Donation</p>
      </header>

      {/* Home Content */}
      <section className="home-content">
        <h2>Welcome to Blood Donation Platform</h2>
        <p>
          This platform is developed to help patients who are in need of blood,
          especially in emergency situations, by easily connecting them with willing donors.
        </p>
        <p>
          We understand how difficult it can be to find a donor in critical moments, which is
          why we provide a system to store donor information by blood group and connect it to
          receivers based on availability.
        </p>
        <p>
          All the receiver has to do is enter the required blood group and their information,
          and our system will search and match with a donor based on the availability of data.
        </p>
        <p>Together, we can make a difference!</p>
      </section>

      {/* Main Sections */}
      <div className="main-container">
        <Section
          icon="❤"
          title="Become a Donor"
          desc="Your donation can save up to 3 lives. Choose your blood group to register as a donor."
          buttonText="Add Donor"
        />
        <Section
          icon="🏥"
          title="Need Blood"
          desc="Find compatible blood donors in your area. Select your blood group to search for donors."
          buttonText="Add Receiver"
        />
      </div>
    </div>
  );
}

function Section({ icon, title, desc, buttonText }) {
  const groups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  return (
    <div className="section">
      <div className="icon">{icon}</div>
      <h2 className="section-title">{title}</h2>
      <p className="description">{desc}</p>
      <button className="main-button">{buttonText}</button>
      <div className="blood-groups">
        {groups.map((g) => (
          <button key={g} className="blood-group-btn">{g}</button>
        ))}
      </div>
    </div>
  );
}
