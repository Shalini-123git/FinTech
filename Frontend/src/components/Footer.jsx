import React from 'react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 text-center mt-10">
      <p>© {new Date().getFullYear()} FinSmart. All rights reserved.</p>
    </footer>
  );
}

export default Footer;